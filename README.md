# Todo List Application

A robust Todo List application built with Node.js, Express.js, MongoDB, and JWT authentication strategy for secure access.

## Features

- Add, view, edit, and delete todos
- Secure user authentication via JWT

## Authentication

### Using JSON Web Tokens (JWT)

This application employs JWT for managing user sessions securely. Upon successful login, a JWT is issued to the user, allowing them to access protected resources within the application.

#### Default User Account

At the beginning of the application, a default user account is automatically created with the following login details:

- Email: `test@gmail.com`
- Password: DEFAULT_USER_PASSWORD in the `.env` file

#### Setting Up

1. **Copy and Modify Environment Variables**: Before starting the application, copy the `.env.example` file to `.env` in your project root directory. Then, open `.env` and modify the variables as required for your environment. Key variables include:

    - `MONGODB_URI`: Your MongoDB connection string. Replace the placeholder with your actual MongoDB URI.
    - `NODE_ENV`: Set this to either `development` or `production` depending on your deployment environment.
    - `DEFAULT_USER_PASSWORD`: The password for the default user account. Change this to something secure for production environments.
    - `JWT_SECRET_KEY`: A secret used to sign JWTs. Keep this value confidential and replace the placeholder with a strong, random string.

2. **Install Dependencies**: Run `npm install` to install all necessary packages.

3. **Initialize Database and Default User**: Start the application with `npm start`. This will initialize the database and create the default user account.

## Usage

Navigate to `http://localhost:<port>` to access the application. Use the default user account details to log in and begin managing your todos.

## API Documentation

For detailed API documentation, please visit the [Postman Documentation](https://documenter.getpostman.com/view/20737844/2sA3QmEutm).



