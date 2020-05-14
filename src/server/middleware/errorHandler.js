
const errorHandler =(context)=>{
    

const error ={
    status:(context.response.status )?context.response.status :500,
    message:(context.response.message)?context.response.message:'Internal Server Error'
}


console.log("aca",error)
context.response.status = error.status ;
context.response.body = error.message;

}



export default errorHandler;
