import express from "express";
import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo,
} from "../controllers/todoController";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.get("/todos/:id", getTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
