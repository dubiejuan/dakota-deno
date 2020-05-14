import { Application } from "https://deno.land/x/oak/mod.ts";
import router from '../server/routes/index.js';
import notFound from "./controllers/notFoundController.js";
import errorHandlerMiddleware from "../server/middleware/errorHandler.js";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);
//app.use(errorHandlerMiddleware);

console.log(`Listening on port: 5000...`);

await app.listen({ port: 5000 });