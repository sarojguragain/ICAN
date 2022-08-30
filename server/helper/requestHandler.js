const  RequestHandeler = (req = {})=> {
    return Object.freeze({
      body:req.body,
          params:req.params,
          url:req.url,
          method:req.method,
          statusCode:req.statusCode,
          baseUrl:req.baseUrl,
          originalUrl:req.originalUrl,
          query:req.query,
    });
  }
  export default RequestHandeler;