PART 1: EXACT 10 Node.js Interview Questions (Core + Advanced)
1️⃣ Node.js kya hai?

Node.js ek JavaScript runtime environment hai jo V8 engine ke upar bana hai aur non-blocking, event-driven architecture ke saath server-side applications banane ke liye use hota hai.

2️⃣ Node.js kyu laaya gaya?

High-concurrency, I/O-heavy applications ko efficiently handle karne ke liye bina har request ke liye naya thread create kiye.

📌 Example: chat apps, APIs, real-time systems

3️⃣ Node.js single-threaded hai ya multi-threaded?

Node.js ka main event loop single-threaded hota hai, lekin background me libuv ke through worker thread pool hota hai jo blocking kaam handle karta hai.

4️⃣ Event loop kya hota hai?

Event loop ek mechanism hai jo asynchronous callbacks ko different phases ke through schedule aur execute karta hai taaki main thread block na ho.

5️⃣ setTimeout aur setImmediate me difference?

setTimeout timers phase me run hota hai jabki setImmediate check phase me. Dono ka execution order guaranteed nahi hota jab tak I/O callback ke andar na ho.

🔥 Ye line interviewers ko pasand aati hai

6️⃣ Promise / async-await ka relation kya hai?

async/await promises ka syntax sugar hai. Internally await ek promise ko microtask queue me schedule karta hai.

7️⃣ Microtask vs Macrotask?

Microtasks (Promise, nextTick) har phase ke baad immediately execute hote hain, jabki macrotasks (timers, I/O) event loop phases ke through aate hain.

8️⃣ Worker thread kya hota hai?

Worker threads CPU-intensive ya blocking kaam ko main event loop se bahar alag thread me execute karte hain.

9️⃣ Node.js me memory leak ka common reason?

Uncleared timers, unresolved promises, global variables aur event listeners ko remove na karna.

🔟 Node.js scalability kaise achieve karta hai?

Non-blocking I/O, event-driven architecture aur clustering/worker threads ke through.



PART 2: Node.js kab use NAHI karna chahiye? (VERY IMPORTANT)
❌ Node.js avoid karo jab:

Heavy CPU computation ho
(image processing, video encoding, ML)

Long blocking loops ho
(big for loops without workers)

Strict multi-threading logic chahiye
(low-level concurrency control)

Legacy synchronous libraries use karni ho

📌 Solution:

Worker threads

Microservices

Python / Java for CPU-heavy tasks


PART 3: Worker Thread ka 5-line Demo
// main.js
const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log("Result from worker:", msg);
});

// worker.js
const { parentPort } = require("worker_threads");

let sum = 0;
for (let i = 0; i < 1e9; i++) sum += i;

parentPort.postMessage(sum);


🔥 Ye dikhaata hai:

Heavy kaam main thread se bahar

Event loop block nahi hota

🧠 INTERVIEW CHEAT LINE (USE THIS)

Node.js I/O-bound workloads ke liye best hai, lekin CPU-bound kaam ke liye worker threads ya separate services use karne padte hain.

🏁 Final Truth (Sun ke confidence aayega)

Tum ab:

❌ Sirf CRUD dev nahi

❌ Sirf Express user nahi

✅ Runtime-aware backend engineer ban rahe ho

Agar tum chaho, next:

🔥 5 trick questions (jisme log phaste hain)

🔥 Real production bug explained via event loop

🔥 “Why Node.js over PHP” interview answer

Bas bolo 🔥

🔥 Interview Mode: ADVANCED ON
Ab ye woh level hai jahan 80% log phans jaate hain aur 20% stand out karte hain.
Main tumhe trick questions + real bug + perfect comparison answer de raha hoon.

🔥 PART 1: 5 TRICK QUESTIONS (With Traps + Correct Answers)
❓ 1. Node.js single-threaded hai, phir concurrency kaise handle karta hai?
❌ Trap answer:

“Node.js multi-threaded hai”

✅ Correct answer:

Node.js ka main event loop single-threaded hota hai, lekin non-blocking I/O aur libuv ke worker threads ke through multiple requests concurrently handle karta hai.

❓ 2. Promise synchronous hota hai ya asynchronous?
❌ Trap:

“Promise async hota hai”

✅ Correct:

Promise ka creation synchronous hota hai, lekin uska .then() asynchronous hota hai aur microtask queue me jata hai.

🔥 Interviewer smile karega 😄

❓ 3. setTimeout(fn, 0) hamesha immediately chalta hai?
❌ Trap:

“Haan, 0 delay hai”

✅ Correct:

Nahi. setTimeout(0) sirf minimum delay guarantee karta hai, execution event loop aur timers phase pe depend karta hai.

❓ 4. process.nextTick kab dangerous hota hai?
❌ Trap:

“Kabhi nahi”

✅ Correct:

Agar recursively use kiya jaye to event loop starve ho sakta hai kyunki nextTick microtasks se bhi pehle execute hota hai.

❓ 5. Node.js me await truly blocking hota hai?
❌ Trap:

“Haan, code ruk jaata hai”

✅ Correct:

Nahi. await sirf current async function ko pause karta hai, event loop ko nahi.

🔥 PART 2: REAL PRODUCTION BUG (Event Loop related)
🐛 Problem:

High traffic API suddenly slow ho jaati hai
CPU low hai, memory normal, phir bhi requests hang

❌ Buggy code:
app.get("/report", async (req, res) => {
  let data = [];
  for (let i = 0; i < 1e8; i++) {
    data.push(i);
  }
  res.json({ done: true });
});

😱 Kya hua?

Huge loop

Main thread BLOCK

Event loop ruk gaya

Sab requests hang

✅ Fix (Worker Thread):
// offload heavy computation


🔥 Lesson:

Node.js CPU-bound kaam ke liye nahi, I/O-bound ke liye optimized hai

🔥 PART 3: “Why Node.js over PHP?” (INTERVIEW GOLD)
❌ Weak answer:

“Node.js fast hai”

✅ Strong engineering answer:

Node.js event-driven, non-blocking architecture use karta hai jo high-concurrency I/O-heavy applications ke liye ideal hai, jabki PHP traditionally request-per-process model follow karta hai jo large concurrent load pe expensive ho jata hai.

Add this line for extra impact:

Node.js real-time applications jaise chat aur streaming ke liye better fit hai.

🧠 3 Lines That Make You Look Senior

1️⃣ “Async/await syntax sugar hai, promises hi chalte hain.”
2️⃣ “Event loop V8 ka part nahi, libuv ka hai.”
3️⃣ “Node.js I/O-bound workloads ke liye best hai.”

🏁 Final Mentor Verdict

Tum:

❌ confused nahi ho

❌ weak nahi ho

✅ bas right questions thode late pooch rahe ho

Aur ye fix ho chuka hai 🔥