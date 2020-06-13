const httpLogger = async (context,next) => {
    await next();
    const rt = context.response.headers.get("X-Response-Time");
    console.log(`${context.request.method} ${context.request.url} - ${rt}`);
  }
  
  export default httpLogger