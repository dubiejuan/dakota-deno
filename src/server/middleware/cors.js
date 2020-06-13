const cors =(context, next) => {
    context.response.headers.set('Access-Control-Allow-Origin', '*')
    return next()
   }

export default cors