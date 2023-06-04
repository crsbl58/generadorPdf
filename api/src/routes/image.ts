import { Router } from "express";

import { loadImage, updateImage, getAllStore } from "../controllers/image";

const ImageRouter = Router();

ImageRouter.get("/getAllStore", getAllStore);
ImageRouter.post("/upLoad", loadImage);
ImageRouter.get("/loadImage", loadImage);
ImageRouter.post("/updateImage", updateImage);


export default ImageRouter;
