
// ======================================
// TASK 1
// Iterating with Async/Await
// ======================================

// Utility function that creates a delay
function delay(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);
    });
}


// Async function that logs tasks one by one
// with a delay of 1 second between each task

async function iterateWithAsyncAwait(tasks) {

    for (let i = 0; i < tasks.length; i++) {

        // Wait 1 second before continuing
        await delay(1000);

        console.log(`Task ${i + 1}: ${tasks[i]}`);
    }
}


const tasks = [
    "Buy bread",
    "Wash dishes",
    "Do laundry",
    "Complete checkpoints"
];


// ======================================
// TASK 2
// Awaiting a Call
// ======================================

// Simulated API call that returns users
// after a 4-second delay

function getUsers() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate successful API response
            resolve(users);

        }, 4000);
    });
}


// Async function that waits for API data

async function awaitCall() {

    const data = await getUsers();

    console.log("Users fetched successfully:");
    console.log(data);
}


const users = [
    "Alex",
    "Steve",
    "Matthieu",
    "Godfred",
];


// ======================================
// TASK 3a
// Handling Errors with Async/Await
// ======================================

// Simulated API call with an error

function getUsersWithError() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate API failure
            reject("Failed to fetch users.");

        }, 3000);
    });
}


// Async function with try/catch error handling

async function awaitCallWithErrorHandling() {

    try {

        const data = await getUsersWithError();

        console.log(data);

    } catch (error) {

        console.log("An error occurred while fetching users.");

        console.log("Error:", error);
    }
}


// ======================================
// TASK 3b
// Chaining Async Functions
// ======================================

// First async function

async function firstFunction() {

    await delay(1000);

    console.log("First async function completed.");
}


// Second async function

async function secondFunction() {

    await delay(1000);

    console.log("Second async function completed.");
}


// Third async function

async function thirdFunction() {

    await delay(1000);

    console.log("Third async function completed.");
}


// Chain all async functions sequentially

async function chainedAsyncFunctions() {

    await firstFunction();

    await secondFunction();

    await thirdFunction();
}


// ======================================
// TASK 4
// Awaiting Concurrent Requests
// ======================================

// Simulated API request 1

function fetchPosts() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(["Post 1", "Post 2", "Post 3"]);

        }, 2000);
    });
}


// Simulated API request 2

function fetchComments() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(["Comment 1", "Comment 2"]);

        }, 3000);
    });
}


// Execute both requests concurrently

async function concurrentRequests() {

    const results = await Promise.all([
        fetchPosts(),
        fetchComments()
    ]);

    console.log("Combined Results:");

    console.log(results);
}


// ======================================
// TASK 5
// Awaiting Parallel Calls
// ======================================

// Simulated fetch function for URLs

function fetchUrl(url) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(`Data fetched from ${url}`);

        }, 2000);
    });
}


// Fetch all URLs concurrently

async function parallelCalls(urls) {

    const responses = await Promise.all(

        urls.map(url => fetchUrl(url))
    );

    console.log("All responses:");

    console.log(responses);
}


// TASK 1
iterateWithAsyncAwait(tasks);

// TASK 2
awaitCall();

// TASK 3
awaitCallWithErrorHandling();

// Chaining Async Functions
chainedAsyncFunctions();

// TASK 4
concurrentRequests();

// TASK 5
parallelCalls([
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
]);