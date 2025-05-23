import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import app from "./restApi.ts";


const server = createServer();

server.on("request", app);


// hard-coded port for simplicity until more flexibility needed
server.listen(9001, () => {
  console.log(`API v1 (re)started`);
});
