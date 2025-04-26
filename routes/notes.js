const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const notesController = require("../controllers/notesController");

router.use(verifyToken);

router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getNoteById);
router.post("/", notesController.createNote);
router.put("/:id", notesController.updateNote);
router.delete("/:id", notesController.deleteNote);

module.exports = router;
