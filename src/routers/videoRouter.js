import express from "express";
import {
  watch,
  upload,
  deletevideo,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getedit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
