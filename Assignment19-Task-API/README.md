# Assignment (27/03/2026)

## Assignment Name: Task API

### Description

This assignment focuses on building a RESTful API for managing tasks. The API supports basic CRUD (Create, Read, Update, Delete) operations and allows users to interact with task data through different endpoints.

The application is tested using Postman to ensure all routes function correctly.

---

## Technologies Used

* Node.js
* Express.js
* JavaScript

---

## Features Implemented

* Create a new task
* Retrieve all tasks
* Retrieve a specific task by ID
* Update task details
* Delete a task
* API testing using Postman

---

## Project Structure

```
Assignment-19-Task-API
│
├── server.js
├── routes
│   └── tasks.js
└── package.json
```

---

## How to Run

1. Install dependencies
   npm install

2. Start the server
   node server.js

3. Open in browser or Postman
   http://localhost:3000/tasks

---

## API Endpoints

* GET /tasks → Retrieve all tasks
* GET /tasks/:id → Retrieve a single task
* POST /tasks → Create a new task
* PUT /tasks/:id → Update a task
* DELETE /tasks/:id → Delete a task

---

## Learning Outcome

Through this assignment, I learned how to design and implement REST APIs using Express. I also gained practical experience in handling HTTP requests, structuring routes, and testing APIs using Postman.


