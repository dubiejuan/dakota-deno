

const validResult =[201];
import { createError, HttpError } from "../../../deps.js";

const adapt = (response) =>{
    console.log(response)
    if(!validResult.includes(response.status)){
        throw createError(502);
    }
return response

}

export default adapt
