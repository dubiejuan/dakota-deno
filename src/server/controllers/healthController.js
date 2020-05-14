  

  const healthController = async  (context) => {
    context.response.status = 200;
    context.response.body = { msg: "Ok" };
  }


  export default healthController;
