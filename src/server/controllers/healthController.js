  

  const healthController =   ({ request, response }) => {



    response.status = 200;
    response.body = { msg: "Ok" };
  }


  export default healthController;
