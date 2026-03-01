Latency -> Ek request ko khatam hone mein kitna waqt laga.
Req/Sec -> 1 second me server ne kitni requests ko successfully handle (finish) kiya.

Latency         Avg Req/Sec
------------------------
Sync

212.45 ms       467.4
332.08 ms       299.11

5k requests in 10.16s, 944 kB read
3k requests in 10.21s, 604 kB read

Async
274.54 ms       355.1
455.84 ms       220.2
326.65 ms       301.11
282.89 ms       349.7

4k requests in 10.19s, 717 kB read
2k requests in 10.35s, 445 kB read
3k requests in 10.23s, 608 kB read

Async Read File
211.28 ms       476.4
216.16 ms       459.7

Sync Read File
290.22 ms       342.3
269.38 ms       368.8

---------------------------------------------
Ye results thode surprising lag rahe hain na? Aapne Async (Non-Blocking) use kiya, phir bhi performance Sync se bhi kharab ho gayi!
Iska ek bahut bada technical reason hai jo Node.js ki working ko samajhne ke liye bahut zaroori hai. Aaiye isse break down karte hain:
1. Aapka Async code actual mein kya kar raha hai?
Aapne code mein ye kiya:
fs.appendFile ko bola "bhai file mein write kar do" (Async).
Node.js ne ye kaam Libuv Thread Pool ko bhej diya.
Uske turant baad, aapne res.end() bhej diya.
Twist: Jab aap autocannon se 100 connections ek saath bhejte hain, toh Node.js ka main thread toh free hai, lekin wo hazaron file-writing tasks ek saath background (OS/Hard Drive) ko bhej deta hai.
2. Performance kyun giri? (The "Resource Exhaustion" Reason)
Aapka output dekhkar saaf pata chal raha hai ki server Disk I/O (Hard Drive ki speed) ki wajah se phans gaya hai:
Pehle Run mein: Req/Sec 355 the.
Doosre Run mein: Gir kar sirf 220 reh gaye.
Latency: Max latency 1.7 seconds tak chali gayi!
Asal wajah:
Jab aap appendFileSync (Sync) use kar rahe the, toh Node.js ek time par sirf ek file write kar raha tha. Lekin Async mein, aapne ek hi second mein hazaron file-writing requests OS ko bhej di.
File Lock: Ek hi file (non-blocking-2.txt) mein hazaron log ek saath likhne ki koshish kar rahe hain. OS ko har baar file lock/unlock karni pad rahi hai.
Overhead: Hazaron callbacks queue mein lag gaye. Jab tak OS file write karke confirm nahi karta, callbacks wait karte rehte hain.
The "Slow Disk" Problem: Aapki CPU toh fast hai, lekin Hard Drive (SSD/HDD) itni fast nahi hoti ki ek saath hazaron "appends" ko handle kare bina slow hue.
3. Sync vs Async ka asli difference kab dikhta?
Agar aap fs.appendFile ki jagah koi aisa kaam karte jo "Disk" par depend nahi karta (jaise setTimeout ya koi calculation), toh Async hamesha jeet-ta.
Yahan kya ho raha hai:
Sync: Ek-ek karke file likh raha hai (Slow, but organized).
Async: Sab ko ek saath file par hamla karne bhej raha hai (Chaos/Bhag-dad, leading to very high latency).


