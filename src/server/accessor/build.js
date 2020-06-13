const build =( name, email, message,front) =>{

    const url ='http://nodejs:8080/api/send-email';

    const headers ={
    'Content-Type': 'application/json'
    };


    const data ={
        name,
        email,
        message,
        front
    };

    const timeout = 3000;
    

    return  fetch(url,{
    method: 'POST',
    headers,
    body: JSON.stringify(data),
    timeout
    });
}


export default build