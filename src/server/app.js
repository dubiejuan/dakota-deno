import { Application } from '../../deps.js';
import router from './routes/index.js';
import httpLogger from './middleware/http-logger.js'
import timing from './middleware/timing.js';
import cors from './middleware/cors.js'


const app = new Application();

app.use(cors);
//Logger
app.use(httpLogger)
// Timing
app.use(timing);
//Routes
app.use(router.routes());
//allowed
// app.use(router.allowedMethods());

console.log("Listening  http://localhost:3000")

await app.listen({ port: 3000 });









