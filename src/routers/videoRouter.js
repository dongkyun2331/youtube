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
videoRouter.route("/:id(\\d+)/edit").get(getedit).post(postEdit);

export default videoRouter;
