import express from "express";
import {
  watch,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoController";
import { see } from "../controllers/userController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
