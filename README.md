# Single or Multithread Problem

git remote -v

This repository explores the concepts of single-threaded and multi-threaded execution through examples in different programming languages.

## Overview

The project demonstrates how asynchronous operations work in single-threaded environments (like Node.js) versus synchronous operations in other languages (like PHP).

## Files

- `index.js`: A Node.js script that demonstrates asynchronous promise handling with fetch API. It shows how JavaScript, being single-threaded, can perform non-blocking I/O operations using async/await.

- `index.php`: A PHP script that performs a synchronous HTTP request using `file_get_contents()`. This blocks execution until the request completes.

## Key Concepts

- **Single-threaded**: JavaScript (Node.js) runs on a single thread but uses an event loop to handle asynchronous operations without blocking.

- **Blocking vs Non-blocking**: The JS example fetches data asynchronously, allowing "Hello 2" to potentially print before the fetch completes. The PHP example blocks until the fetch is done.

## Running the Code

### JavaScript (Node.js)
```bash
node index.js
```

### PHP
```bash
php index.php
```

## Purpose

This repository serves as a simple demonstration of concurrency models in programming languages and how they handle I/O operations differently.


## Check Server load balancing

npx autocannon -c 100 -d 10 http://localhost:3000

## Sync Operation (Blocking)
## 1
Running 10s test @ http://localhost:3000
100 connections

┌─────────┬───────┬────────┬────────┬────────┬───────────┬──────────┬────────┐  
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │  
├─────────┼───────┼────────┼────────┼────────┼───────────┼──────────┼────────┤  
│ Latency │ 80 ms │ 193 ms │ 411 ms │ 421 ms │ 212.45 ms │ 68.25 ms │ 429 ms │  
└─────────┴───────┴────────┴────────┴────────┴───────────┴──────────┴────────┘  
┌───────────┬─────────┬─────────┬─────────┬────────┬─────────┬───────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg     │ Stdev │ Min     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
│ Req/Sec   │ 370     │ 370     │ 442     │ 577    │ 467.4   │ 69.11 │ 370     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
│ Bytes/Sec │ 74.8 kB │ 74.8 kB │ 89.3 kB │ 117 kB │ 94.4 kB │ 14 kB │ 74.7 kB │
└───────────┴─────────┴─────────┴─────────┴────────┴─────────┴───────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

5k requests in 10.16s, 944 kB read

## 2
Running 10s test @ http://localhost:3000
100 connections

┌─────────┬───────┬────────┬────────┬────────┬───────────┬───────────┬─────────┐   
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev     │ Max     │   
├─────────┼───────┼────────┼────────┼────────┼───────────┼───────────┼─────────┤   
│ Latency │ 71 ms │ 279 ms │ 750 ms │ 851 ms │ 332.08 ms │ 158.92 ms │ 1340 ms │   
└─────────┴───────┴────────┴────────┴────────┴───────────┴───────────┴─────────┘   
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 199     │ 199     │ 284     │ 419     │ 299.11  │ 76.52   │ 199     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 40.2 kB │ 40.2 kB │ 57.4 kB │ 84.7 kB │ 60.4 kB │ 15.5 kB │ 40.2 kB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

3k requests in 10.21s, 604 kB read

## **************************************************
## Async (Non-Blocking) Operation test

## 1
Running 10s test @ http://localhost:3000
100 connections

┌─────────┬───────┬────────┬────────┬────────┬───────────┬───────────┬─────────┐
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev     │ Max     │
├─────────┼───────┼────────┼────────┼────────┼───────────┼───────────┼─────────┤
│ Latency │ 29 ms │ 261 ms │ 559 ms │ 702 ms │ 274.54 ms │ 126.94 ms │ 1038 ms │
└─────────┴───────┴────────┴────────┴────────┴───────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 275     │ 275     │ 359     │ 444     │ 355.1   │ 50.03   │ 275     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 55.6 kB │ 55.6 kB │ 72.6 kB │ 89.7 kB │ 71.7 kB │ 10.1 kB │ 55.5 kB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10
n
4k requests in 10.19s, 717 kB read

## 2
Running 10s test @ http://localhost:3000
100 connections

┌─────────┬───────┬────────┬─────────┬─────────┬───────────┬───────────┬─────────┐ 
│ Stat    │ 2.5%  │ 50%    │ 97.5%   │ 99%     │ Avg       │ Stdev     │ Max     │ 
├─────────┼───────┼────────┼─────────┼─────────┼───────────┼───────────┼─────────┤ 
│ Latency │ 27 ms │ 363 ms │ 1632 ms │ 1661 ms │ 455.84 ms │ 357.13 ms │ 1785 ms │ 
└─────────┴───────┴────────┴─────────┴─────────┴───────────┴───────────┴─────────┘ 
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 63      │ 63      │ 194     │ 354     │ 220.2   │ 88.58   │ 63      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 12.7 kB │ 12.7 kB │ 39.2 kB │ 71.6 kB │ 44.5 kB │ 17.9 kB │ 12.7 kB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

2k requests in 10.35s, 445 kB read


## 3
Running 10s test @ http://localhost:3000
100 connections


┌─────────┬───────┬────────┬────────┬────────┬───────────┬───────────┬─────────┐ 
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev     │ Max     │ 
├─────────┼───────┼────────┼────────┼────────┼───────────┼───────────┼─────────┤ 
│ Latency │ 26 ms │ 315 ms │ 782 ms │ 873 ms │ 326.65 ms │ 186.91 ms │ 1013 ms │ 
└─────────┴───────┴────────┴────────┴────────┴───────────┴───────────┴─────────┘ 
┌───────────┬─────────┬─────────┬─────────┬───────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5% │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼───────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 141     │ 141     │ 321     │ 391   │ 301.11  │ 81.41   │ 141     │
├───────────┼─────────┼─────────┼─────────┼───────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 28.5 kB │ 28.5 kB │ 64.9 kB │ 79 kB │ 60.8 kB │ 16.4 kB │ 28.5 kB │
└───────────┴─────────┴─────────┴─────────┴───────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

3k requests in 10.23s, 608 kB read


==========================================================================
index.php file (npx autocannon -c 100 -d 10 http://localhost/test/)
<?php
// console.log() ki jagah error_log() ya echo use karein
// Server logs mein dekhne ke liye:
error_log("Before Async Operation");

// fs.readFileSync() ka equivalent PHP mein file_get_contents() hai
$fileContent = file_get_contents("./non-blocking-1.txt");

error_log("After async operation completed");

// res.writeHead(200, ...) ke liye header() function use karein
header('Content-Type: application/json');
http_response_code(200);

// res.end(JSON.stringify(...)) ka equivalent json_encode() aur echo hai
echo json_encode(["message" => "Server testing"]);
?>
Running 10s test @ http://localhost/test/
100 connections

┌─────────┬──────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5% │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼──────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 3 ms │ 123 ms │ 415 ms │ 517 ms │ 131.09 ms │ 86.99 ms │ 829 ms │
└─────────┴──────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 617    │ 617    │ 769    │ 1,033  │ 807.7  │ 127.71  │ 617    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 169 kB │ 169 kB │ 211 kB │ 283 kB │ 221 kB │ 34.9 kB │ 169 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

8k requests in 10.83s, 2.21 MB read

(server.js)
Synchronous Operation (npx autocannon -c 100 -d 10 http://localhost:3000)
process.env.UV_THREADPOOL_SIZE = 64;
const http = require("http")
const fs = require("fs")
const PORT = 3000

const server = http.createServer((req, res) => {
     console.log(`Before Async Operation`)

    // Non-Blocking the server
    fs.readFileSync("./non-blocking-1.txt", `utf-8`)
    
    console.log(`After async operation completed`)

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({ message: "Server testing"}));
})

server.listen(PORT, (err) => {
    if (err) return console.log("Error:", err);
    console.log(`Server listen on port: ${PORT}`)
})
Running 10s test @ http://localhost:3000
100 connections

┌─────────┬───────┬────────┬────────┬────────┬───────────┬──────────┬────────┐  
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │  
├─────────┼───────┼────────┼────────┼────────┼───────────┼──────────┼────────┤  
│ Latency │ 39 ms │ 228 ms │ 508 ms │ 525 ms │ 238.57 ms │ 90.12 ms │ 905 ms │  
└─────────┴───────┴────────┴────────┴────────┴───────────┴──────────┴────────┘  
┌───────────┬─────────┬─────────┬─────────┬────────┬─────────┬───────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg     │ Stdev │ Min     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
│ Req/Sec   │ 324     │ 324     │ 407     │ 518    │ 414.9   │ 59.53 │ 324     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
│ Bytes/Sec │ 65.5 kB │ 65.5 kB │ 82.2 kB │ 105 kB │ 83.8 kB │ 12 kB │ 65.4 kB │
└───────────┴─────────┴─────────┴─────────┴────────┴─────────┴───────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

4k requests in 10.22s, 838 kB read

Asynchronous Operation (npx autocannon -c 100 -d 10 http://localhost:3000)
process.env.UV_THREADPOOL_SIZE = 64;
const http = require("http")
const fs = require("fs")
const PORT = 3000

const server = http.createServer((req, res) => {
     console.log(`Before Async Operation`)

    // Non-Blocking the server
    fs.readFile("./non-blocking-1.txt", `utf-8`, (err, data) => {

    })
    
    console.log(`After async operation completed`)

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({ message: "Server testing"}));
})

server.listen(PORT, (err) => {
    if (err) return console.log("Error:", err);
    console.log(`Server listen on port: ${PORT}`)
})
Running 10s test @ http://localhost:3000
100 connections


┌─────────┬───────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼───────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 37 ms │ 186 ms │ 514 ms │ 542 ms │ 198.84 ms │ 90.67 ms │ 570 ms │
└─────────┴───────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬────────┬────────┬────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼─────────┼─────────┤
│ Req/Sec   │ 304     │ 304     │ 495    │ 679    │ 498.9  │ 106.18  │ 304     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼─────────┼─────────┤
│ Bytes/Sec │ 61.4 kB │ 61.4 kB │ 100 kB │ 137 kB │ 101 kB │ 21.4 kB │ 61.4 kB │
└───────────┴─────────┴─────────┴────────┴────────┴────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

5k requests in 10.18s, 1.01 MB read