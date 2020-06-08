

const validResult =[201];
import { createError, HttpError } from "https://deno.land/x/http_errors/mod.ts";

const adapt = (response) =>{
    if(!validResult.includes(response.status)){
        throw createError(502);
    }

return response

}

export default adapt
