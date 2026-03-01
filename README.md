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