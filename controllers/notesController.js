const pool = require("../db");

// GET /notes
const getAllNotes = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes WHERE user_id = $1", [
      req.user.userId,
    ]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

// GET /notes/:id
const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM notes WHERE id = $1 AND user_id = $2",
      [id, req.user.userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error fetching note" });
  }
};

// POST /notes
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO notes (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, req.user.userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error creating note" });
  }
};

// PUT /notes/:id
const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 AND user_id = $4 RETURNING *",
      [title, content, id, req.user.userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error updating note" });
  }
};

// DELETE /notes/:id
const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM notes WHERE id = $1 AND user_id = $2 RETURNING *",
      [id, req.user.userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting note" });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
