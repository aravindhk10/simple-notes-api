#  Simple Notes API

A secure RESTful Notes API built with Node.js, Express, and PostgreSQL.  
Implements authentication via JWT, raw SQL (no ORM), and full CRUD operations for personal notes.

---

##  Tech Stack

- Node.js + Express.js
- PostgreSQL
- JWT for Authentication
- bcrypt for Password Hashing
- CORS enabled
- Raw SQL queries (no ORM)

---

##  Getting Started

### 1. Clone and install dependencies
```
git clone https://github.com/aravindhk10/simple-notes-api.git
cd simple-notes-api
npm install
```
### 2. Setup Environment Variables
Create a .env file in the root folder:
```
PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/notes_db
JWT_SECRET=your_super_secret_key
```

### 3. Create Database Tables
create a database notes_db and within that two table users and notes according to the schema.sql file or follow the script below.
```
psql -U postgres -d notes_db -f schema.sql
```
### 4. Start the Server
```
npm run dev
```
## Testing the API with Postman

### 1. Insert a Test User into Database
You need to manually add a username and password(hashed) to the users table, thereby creating a user. 
For that, first generate a hashed veersion of the password usinng bcrypt.
- Create a generate-hash.js file with the following content:
```
const bcrypt = require("bcrypt");

const password = "yourpassword"; // Replace with your chosen password

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
```
Run it using:
```
node generate-hash.js
```
Copy the generated hashed password.
Insert the user manually into the database:
```
INSERT INTO users (username, password_hash)
VALUES ('yourusername', 'your_generated_hashed_password');
```
### 2. Login to Receive a Token
 In Postman, POST request to:
 ```
http://localhost:5000/login

 ```
Set Body -> raw -> JSON:
```
{
  "username": "yourusername",
  "password": "yourpassword"
}
```
If credentials are correct, you will receive a JWT token in the response:
```
{
  "token": "your_generated_token_here"
}
```
### 3. Access Notes Endpoints Using the Token
For all /notes API calls, you must add the token inside the Headers:

- Key: Authorization

- Value: Bearer your_token_here


###  Notes API Routes to be tested:

- After logging in and getting the token, you can test the following Notes API routes using Postman:

| Method | Full Route                         | Purpose                |
|--------|-------------------------------------|-------------------------|
| POST   | `http://localhost:5000/notes`       | Create a new note       |
| GET    | `http://localhost:5000/notes`       | Get all notes           |
| GET    | `http://localhost:5000/notes/:id`   | Get a specific note by ID |
| PUT    | `http://localhost:5000/notes/:id`   | Update a note by ID     |
| DELETE | `http://localhost:5000/notes/:id`   | Delete a note by ID     |

Remember:  
- For all these routes, you **must attach the Authorization header** in Postman: Authorization: Bearer your_token_here

