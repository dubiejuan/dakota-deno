 import build from '../accessor/build.js'
 import check from '../accessor/check.js'
 import adapt from '../accessor/adap.js'
 const emailController = async (context,next) => {

    const { value: { name, email, message,front}} = await context.request.body();

    console.log(name, email, message,front)
    try {

      context.assert(name,400,"Bad Request")
      context.assert(email,400,"Bad Request")
      context.assert(message,400,"Bad Request")
      context.assert(front,400,"Bad Request")

      const res =await check(await build(name, email, message,front))
 
      context.response.status = 200;
      context.response.body = {};
    } catch (error) {
      context.throw(error.status,error.message)
    }
    
  }

  export default emailController;
  

