# 📝 Simple Notes API

A secure RESTful Notes API built with Node.js, Express, and PostgreSQL.  
Implements authentication via JWT, raw SQL (no ORM), and full CRUD operations for personal notes.

---

## 📦 Tech Stack

- Node.js + Express.js
- PostgreSQL
- JWT for Authentication
- bcrypt for Password Hashing
- CORS enabled
- Raw SQL queries (no ORM)

---

## 🚀 Getting Started

### 1. Clone and install dependencies

```bash
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
