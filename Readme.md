
# Role-Based Access Control Manager

## Overview

This repository contains the backend API documentation and implementation for a Role-Based Access Control (RBAC) manager. The API allows users to manage roles, permissions, and user access to resources based on their roles. Key technologies used include Node.js for the backend, JWT authentication, and MongoDB as the database.

## Features

- Role management: Create, update, and delete roles
- Permission management: Assign permissions to roles
- User management: Create, update, and delete users
- Access control: Control user access to resources based on roles and permissions
- API endpoints for managing roles, permissions, and users

## Setup Instructions

1. Clone the Repository:
   ```sh
   git clone https://github.com/Harshsharma836/Role-Based-Access-Control-Manager.git
   ```

2. **Change directory to the project folder:**
   ```sh
   cd Role-Based-Access-Control-Manager
   ```

3. **Install Dependencies:** 
   ```sh
   npm install
   ```

4. **Environment Setup:** 
   Create an `.env` file in the root directory with the following variables:
   ```sh
   PORT=3000
   JWT_SECRET=YOUR_JWT_SECRET_KEY
   MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
   ```

5. **Start the Server:** 
   ```sh
   npm start
   ```

## API Endpoints

- `POST /user/register`: Register a new user.
- `POST /user/login`: Log in an existing user.
- `PUT /user/profile`: Update user profile details.
- `POST /user/signout`: Sign out user.
- `GET /admin/dashboard`: Get all users (admin only).

## Authentication

- JWT is used for authentication. Upon successful login, a JWT is generated and returned in the response.
- Include JWT in the `Authorization` header as `Bearer YOUR_JWT_TOKEN` for accessing protected routes.

## Error Handling

- Proper error handling is implemented for various scenarios like bad requests, unauthorized access, resource not found, and internal server errors.

## Testing

- Unit tests are written using a testing framework (e.g., Mocha).
- Run tests using `npm run test`.

## MongoDB Collection View

![Screenshot (198)](https://github.com/Harshsharma836/Role-Based-Access-Control-API/assets/70514943/3b889794-6863-47a4-8a01-8eeb3e174ddc)

## API Documentation

You can find the API documentation below:

https://node-role-based-server.onrender.com/api-docs/
