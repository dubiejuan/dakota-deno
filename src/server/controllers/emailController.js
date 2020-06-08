 
 import { assert } from "https://deno.land/std/testing/asserts.ts";
 import { createError, HttpError } from "https://deno.land/x/http_errors/mod.ts";
 import build from '../accessor/build.js'
 import check from '../accessor/check.js'
 import adapt from '../accessor/adap.js'
 const emailController = async ({ request, response} , next) => {
     //await  next()

    const { value: { name, email, message }} = await request.body();

    
    try {
   
      const res =await check(await build(name, email, message))

      console.log("response",res)

      response.status = 200;
      response.body = {};

    } catch (error) {
      console.log("----error-----",error)
      throw error
    }


 
    
  }

  export default emailController;
  

