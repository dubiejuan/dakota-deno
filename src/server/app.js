import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes/index.js';
import httpLogger from './middleware/http-logger.js'
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import timing from "./middleware/timing.js";


const app = new Application();

//Logger
app.use(httpLogger)
// Timing
app.use(timing);
//Routes
app.use(router.routes());
//allowed
app.use(router.allowedMethods());
//Errors
//app.use(errorHandlerMiddleware);

console.log("Listening  http://localhost:3000")

await app.listen({ port: 3000 });







