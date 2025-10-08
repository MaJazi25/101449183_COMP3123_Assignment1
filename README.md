COMP3123 Assignment 1 – Backend API
Author: Mehdi Jazi
Student ID: 101449183
Course: COMP3123 – Full Stack Development I
Professor: Pritesh Patel
Due Date: Oct 12, 2025

Project Overview
This project is a RESTful API built using Node.js, Express, and MongoDB for managing users and employees.
It demonstrates CRUD operations, validation, proper HTTP status codes, and password hashing.

Tech Stack

Node.js and Express

MongoDB (Database name: comp3123_assigment1)

Mongoose ODM

bcrypt for password hashing

express-validator for validation
------------------------------------------------------------

Project Structure  
src  
 ├── controllers  
 │   ├── user.controller.js  
 │   └── employee.controller.js  
 ├── models  
 │   ├── user.model.js  
 │   └── employee.model.js  
 ├── routes  
 │   ├── user.route.js  
 │   └── employee.route.js  
 └── server.js

------------------------------------------------------------

How to Run Locally

Step 1: Clone the Repository  
git clone https://github.com/MaJazi25/101449183_COMP3123_Assignment1.git  
cd 101449183_COMP3123_Assignment1

Step 2: Install Dependencies  
npm install

Step 3: Configure Environment Variables  
Create a file named .env in the root folder with this content:  
PORT=3000  
MONGO_URI=mongodb://rootadmin:password@localhost:27017/comp3123_assigment1

Step 4: Run the Server  
npm start  
The server will run on http://localhost:3000

------------------------------------------------------------

API Endpoints

User Routes  (/api/v1/user)
POST   /api/v1/user/signup     201   Create a new user  
POST   /api/v1/user/login      200   Login with email or username  

Example Signup Request:
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123"
}

Example Signup Response:
{
  "message": "User created successfully.",
  "user_id": "64c9e5a3d9f3c1a5c9b4e8a1"
}

------------------------------------------------------------

Employee Routes  (/api/v1/emp)
GET     /api/v1/emp/employees             200   Get all employees  
POST    /api/v1/emp/employees             201   Add a new employee  
GET     /api/v1/emp/employees/:eid        200   Get an employee by ID  
PUT     /api/v1/emp/employees/:eid        200   Update employee details  
DELETE  /api/v1/emp/employees?eid=xxx     204   Delete an employee by ID  

------------------------------------------------------------

Validation and Security  
- All required fields are validated using express-validator  
- Passwords are hashed using bcrypt  
- Error responses are returned in JSON format  

Example error response:
{
  "status": false,
  "message": "Invalid Username and password"
}

------------------------------------------------------------

Testing  
All endpoints were tested using Postman.  
The submission includes:  
- Postman collection file (Assignment1_Postman_Collection.json)  
- Screenshots of successful requests and responses  
- Screenshot of MongoDB Compass showing users and employees collections

------------------------------------------------------------

Submission Package Includes  
- GitHub Repository: https://github.com/MaJazi25/101449183_COMP3123_Assignment1  
- Project ZIP (without node_modules)  
- Postman Collection JSON  
- Screenshots folder  
- README.md  
- .env.example

------------------------------------------------------------

Sample Credentials  
Username: johndoe  
Email: johndoe@example.com  
Password: password123

------------------------------------------------------------

Notes  
- Status codes match assignment requirements exactly  
- Database name follows instructions: comp3123_assigment1  
- The app uses modular MVC architecture for clarity and maintainability
