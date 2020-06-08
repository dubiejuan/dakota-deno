const build =( name, email, message) =>{

    // name.assert(400);
    // email.assert(400);
    // message.assert(400);

    const url ='http://localhost:8080/api/send-email';

    const headers ={
    'Content-Type': 'application/json'
    };

    const data ={
        name,
        email,
        message
    };

    const timeout = 3000;
    
    return fetch(url,{
    method: 'POST',
    headers,
    body: JSON.stringify(data),
    timeout
    });

}


export default build