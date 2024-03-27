Sure, here's the entire README.md file with all the information provided in a single file:

```markdown
# Enhanced Authentication API

## Overview

This repository contains the backend API documentation and implementation for an enhanced authentication system. The API allows users to register, log in, manage their profiles, and sets their profiles as public or private. Admin users have access to both public and private user profiles, while normal users can only access public profiles. Key technologies used include Node.js for the backend, JWT authentication, and MongoDB as the database.

## User Stories

- As a user, I can register a new account.
- As a user, I can log in.
- As a user, I can log in or register with at least one of the following services: Google, Facebook, Twitter, or GitHub.
- As a user, I can sign out.
- As a user, I can see my profile details.
- As a user, I can edit my details including: photo, name, bio, phone, email, and password.
- As a user, I can upload a new photo or provide an image URL.
- As a user, I can choose to make my profile public or private.
- As an admin user, I can see both public and private user profiles.
- As a normal user, I can only see public user profiles.

## Setup Instructions

1. Clone the Repository:
   ```sh
   git clone https://github.com/your_username/enhanced-authentication-api.git
   ```

2. **Change directory to the project folder:**
   ```sh
   cd enhanced-authentication-api
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

## Role-Based Access Control (RBAC)

- Two roles are defined: `user` and `admin`.
- Admin users have access to all user profiles.
- Normal users can only access public user profiles.

## Error Handling

- Proper error handling is implemented for various scenarios like bad requests, unauthorized access, user not found, and internal server errors.

## Testing

- Unit tests are written using a testing framework (e.g., Mocha).
- Run tests using `npm run test`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## Hosting (Optional)

You can host the API on a platform like Heroku to make it accessible online. Provide clear instructions on how to access the hosted API.

## API Documentation (Swagger)

You can utilize Swagger to create an API playground for testing the API endpoints interactively. Instructions on how to access the Swagger documentation and utilize the playground can be found [here](https://your-api-host/swagger-docs).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

You can copy and paste this content into your README.md file. Let me know if you need any further assistance!