const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes"); // We’ll uncomment this later

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Notes API is running!");
});

// Routes
app.use("/login", authRoutes);
app.use("/notes", notesRoutes); // We’ll add this later

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
