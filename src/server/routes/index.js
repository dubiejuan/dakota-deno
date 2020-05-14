import emailController from '../controllers/emailController.js';
import healthController from '../controllers/healthController.js';
import {  Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .get("/", (context) => {context.response.body = "Hello world!";})  
  .post("/email", emailController)
  .get("/health", healthController)
  

export default router;


