require("custom-env").env(process.env.NODE_ENV);

const config = {
  env: process.env.ENV,
  apiKey: process.env.API_KEY,
  secret: "f415f4c0-c0b4-403b-a53a-d74aee402c34",
  apiPort: parseInt(process.env.API_PORT || "0"),
  serverElParron:process.env.SERVER_ELPARRON,
  apiKeyElParron:process.env.APIKEY_ELPAROON
};

export default config;
