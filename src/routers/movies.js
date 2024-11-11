import { Router } from "express";

import * as movieControllers from "../controllers/movies.js"

import ctrlWrapper from "../constants/ctrlWrapper.js";

const moviesRouter = Router();

moviesRouter.get("/", ctrlWrapper(movieControllers.getMovieByIdController));

moviesRouter.get("/:id", ctrlWrapper(movieControllers.getMovieByIdController));

export default moviesRouter;