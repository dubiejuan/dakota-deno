import emailController from '../controllers/emailController.js';
import healthController from '../controllers/healthController.js';
import {  Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .post("/email", emailController)
  .get("/health", healthController)
  


  const notFound = (context) => {
    context.response.status = 404;
    context.response.body = { msg: "Not Found" };
  }


export default router;


