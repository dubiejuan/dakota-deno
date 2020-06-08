const httpLogger = async ({request,response}, next) => {
    await next();
    const rt = response.headers.get("X-Response-Time");
    console.log(`${request.method} ${request.url} - ${rt}`);
  }
  
  export default httpLogger