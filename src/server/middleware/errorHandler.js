
const errorHandler =async ({ request, response },next)=>{
    

const error ={
    status:(response.status )?response.status :500,
    message:(response.message)?response.message:'Internal Server Error'
}
response.status = error.status ;
response.body = {message : error.message}

}



export default errorHandler;
