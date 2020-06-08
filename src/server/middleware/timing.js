
const timing = async ({request,response}, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    response.headers.set("X-Response-Time", `${ms}ms`);
}

  export default timing