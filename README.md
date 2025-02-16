Finance Managment MERN Stack Project

Project Description:
A web application to help users manage their finances, recieve insights based on their income and track expenses

Features:
1) User authentication
2) Add expenses
3) View history of all expenses
4) Insights on how much to spend, save, invest, etc based on user's income

Tech Stack:
1) Frontend: React
2) Backend: Express
3) Database: MongoDB

Installation and Setup:
1) Prerequisites:
    MongoDB Atlas
    Node.js

2) Steps to run locally:
    a) Create a .env file in the backend and add
       . MONGO_URI
       . JWT_SECRET
    b) Run the app
       . Run backend using node server.js
       . Run frontend using npm start
    c) Open http://localhost:3000 in browser

API Endpoints:
1)POST/signup -> Registers a new user by saving their email and hashed password to the database
2)POST/login -> Authenticates a user and returns a JWT token if valid credentials are provided
3)GET/expenses -> Retrieves all expenses related to the authenticated user
4)POST/expenses -> Adds a new expense for the authenticated user

Contributions:
Backend -> storing details in the MongoDB database and verifying login and signup details
