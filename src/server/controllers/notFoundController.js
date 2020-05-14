    const notFound = (context) => {
    context.response.status = 404;
    context.response.body = { msg: "Not Found" };
  }

  export default notFound;
  

