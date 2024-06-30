# Task Management Application

A simple task management application built with Vue.js 3 (Composition API) and NestJS. This application allows users to manage their tasks efficiently.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Best Practices](#best-practices)
- [License](#license)

## Features

- Add, edit, delete, and list tasks
- Each task has a title, description, and status (e.g., "TO_DO," "IN_PROGRESS," "DONE")
- Dockerized frontend and backend applications

## Tech Stack

- **Frontend:** Vue.js 3, Tailwind CSS
- **Backend:** NestJS, PostgreSQL
- **Containerization:** Docker

## Prerequisites

- Docker and Docker Compose installed on your machine

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/zakarya3/taskManagemet.git

2. **Ensure you have Docker and Docker Compose installed**
3. **Create a .env file in the backend directory with the following content:**
   ```ssh
   POSTGRES_HOST=db_dev
   POSTGRES_PORT=5432
   POSTGRES_USER=taskManager
   POSTGRES_PASSWORD=taskManager2024
   POSTGRES_DB=db_taskmanager

## Running the Application
1. **Navigate to the root directory of the project. **
2. **Build and start the Docker containers: **
   ```ssh
   docker-compose up --build

3. Access the application:
- http://localhost:8080 
- http://localhost:3000/api

## API Documentation Endpoints 
Get All Tasks URL: /api/tasks Method: GET Description: Retrieve a list of all tasks. Get a Task by ID URL: /api/tasks/:id Method: GET Description: Retrieve a single task by its ID. Create a Task URL: /api/tasks Method: POST Description: Create a new task. Request Body: json Copy code { "title": "Task title", "description": "Task description", "status": "TO_DO" } Update a Task URL: /api/tasks/:id Method: PUT Description: Update an existing task. Request Body: json Copy code { "title": "Updated title", "description": "Updated description", "status": "IN_PROGRESS" } Delete a Task URL: /api/tasks/:id Method: DELETE Description: Delete a task by its ID. Best Practices Git Commit Messages Use clear and concise commit messages. Follow the convention: type(scope): description. Git Branching Strategy Use feature branches for new features. Use main or master for production-ready code. Merge feature branches into main using pull requests. Unit Testing Write unit tests for both frontend and backend code. Use testing frameworks like Jest for NestJS and Vue Test Utils for Vue.js. License This project is licensed under the MIT License.