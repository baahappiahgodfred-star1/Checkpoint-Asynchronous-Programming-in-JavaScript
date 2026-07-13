# Async/Await JavaScript Exercises

## Overview

This project contains a series of JavaScript exercises focused on asynchronous programming using `async/await`, Promises, and concurrent execution.

The goal of these exercises is to understand how JavaScript handles asynchronous operations such as delays, API calls, error handling, sequential execution, and concurrent requests.

---

# Topics Covered

* Delayed execution with Promises
* Async/Await syntax
* Sequential asynchronous execution
* Simulated API calls
* Error handling with `try/catch`
* Concurrent requests with `Promise.all()`
* Parallel asynchronous operations

---

# Project Structure

```txt
project/
│
├── index.js
└── README.md
```

---

# Exercises Included

## Task 1 — Iterating with Async/Await

Logs an array of tasks one by one with a 1-second delay between each output.

Concepts used:

* `async/await`
* Promises
* Delayed execution

---

## Task 2 — Awaiting a Call

Simulates an API request and waits for the response before displaying the fetched data.

Concepts used:

* Simulated asynchronous API calls
* Promise resolution
* Awaiting asynchronous operations

---

## Task 3 — Handling Errors with Async/Await

Demonstrates how to handle asynchronous errors gracefully using `try/catch`.

Concepts used:

* Promise rejection
* Error handling
* Exception management

---

## Task 4 — Chaining Async Functions

Executes multiple asynchronous functions sequentially using `await`.

Concepts used:

* Sequential async execution
* Function chaining
* Execution order control

---

## Task 5 — Concurrent Requests

Executes multiple asynchronous requests concurrently using `Promise.all()` and combines the results.

Concepts used:

* Concurrent execution
* `Promise.all()`
* Multiple async operations

---

## Task 6 — Parallel API Calls

Fetches data from multiple URLs in parallel and logs all responses after completion.

Concepts used:

* Parallel requests
* Array mapping with Promises
* Batch asynchronous processing

---

# Technologies Used

* JavaScript (ES6+)
* Node.js

No external libraries or frameworks are required.

---

# Running the Project

Run the following command:

```bash
node index.js
```

---

# Learning Objectives

This project was created to practice and better understand:

* JavaScript asynchronous programming
* Promise lifecycle
* Async/Await behavior
* Error handling strategies
* Sequential vs concurrent execution
* Parallel request management

---

# Conclusion

These exercises provide practical experience with modern asynchronous JavaScript patterns commonly used in real-world applications such as APIs, backend services, databases, and frontend frameworks.
