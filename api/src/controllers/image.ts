import fs from "fs";
import axios from "axios";
import config from "../utils/config";

const loadImage = async (req: any, res: any) => {
  const routeFile = "input";

  let newFile = await fs.promises.readdir(routeFile);

  const imagesList = newFile.map((mapItem: any, index: number) => {
    return { id: index, name: mapItem };
  });

  res.json(imagesList);
};

const getAllStore = async (req: any, res: any) => {
  const apiInstance = axios.create({
    baseURL: `${config.serverElParron}/api`,
    headers: { id: config.apiKeyElParron },
  });
  const { data } = await apiInstance.get(`/store/getAll`);
  res.json(data);
};

const updateImage = async (req: any, res: any) => {
  const arrayUpdate = req.body;

  const routeFile = "input";

  let newFile = await fs.promises.readdir(routeFile);

  let arrayDelete: any = [];
  newFile.forEach((mapItem: any) => {
    if (!arrayUpdate.some((objeto: any) => objeto.name === mapItem)) {
      arrayDelete.push(mapItem);
    }
  });

  await Promise.all(
    arrayDelete.map(async (archivo: any) => {
      await fs.promises.unlink(`input/${archivo}`);
    })
  );

  await Promise.all(
    arrayUpdate.map(async (mapItem: any, index: number) => {
      await fs.promises.rename(
        `input/${mapItem.name}`,
        `input/_${mapItem.name}`
      );
    })
  );

  await Promise.all(
    arrayUpdate.map(async (mapItem: any, index: number) => {
      let nameNum = `0${index}`;
      if (index > 9) {
        nameNum = `${index}`;
      }

      await fs.promises.rename(
        `input/_${mapItem.name}`,
        `input/${nameNum}.jpg`
      );
    })
  );

  newFile = await fs.promises.readdir(routeFile);

  res.json(
    newFile.map((mapItem: any, index: number) => {
      return { id: index, name: mapItem };
    })
  );
};

export { loadImage, updateImage, getAllStore };
