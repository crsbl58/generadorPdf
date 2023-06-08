import express from "express";
import session from "express-session";
import cors from "cors";
import dirPath from "path";

import { auth } from "./middlewares";
import * as routes from "./routes";
import config from "./utils/config";

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
  }

  routes() {
    this.server.use(
      "/files/pdf",
      express.static(dirPath.join(__dirname, "./../", "output"))
    );
    this.server.use(
      "/files/excel",
      express.static(dirPath.join(__dirname, "./../", "output"))
    );
    this.server.use("/api/generators", routes.GeneratorRouter);
  }
}

export default new App().server;
