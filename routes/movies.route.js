import express from "express";
import {
    MovieCreate,
    MovieDelete,
    MovieIndex,
    MovieDeatail,
    MovieUpdate
} from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/", MovieIndex);

router.get("/:id", MovieDeatail);

router.post("/", MovieCreate);

router.put("/:id", MovieUpdate);

router.delete("/:id", MovieDelete);

export default router;