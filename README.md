# Single or Multithread Problem

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