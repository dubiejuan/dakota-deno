  

  const healthController =   (context) => {
    context.response.status = 200;
    context.response.body = { msg: "Ok" };
  }


  export default healthController;
