import express from "express";
import session from "express-session";
import cors from "cors";
import dirPath from "path";
import multer from "multer";
import fs from "fs";

import { reqLogger } from "./middlewares/logger";
import { auth } from "./middlewares";
import * as routes from "./routes";
import config from "./utils/config";
import { numbName } from "./utils/file";

class App {
  public server: any;

  constructor() {
    this.server = express();
    this.session();
    this.middlewares();
    this.routes();
  }

  session() {
    this.server.use(
      session({ secret: config.secret, resave: true, saveUninitialized: true })
    );
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(
      multer({
        storage: multer.diskStorage({
          destination: dirPath.join(__dirname, "../input"),
          filename: async (req, file, cb) => {
            const newFiles = await fs.promises.readdir("input");

            let name = newFiles.length;
            let numSum = "0";
            if (newFiles.length > 9) {
              numSum = "";
            }
            cb(null, numSum + name + ".jpg".toString());
          },
        }),
        dest: dirPath.join(__dirname, "../input"),
      }).single("image")
    );
  }

  routes() {
    this.server.use(express.static("input"));
    this.server.use("/api/image", auth, routes.ImageRouter);
  }
}

export default new App().server;
