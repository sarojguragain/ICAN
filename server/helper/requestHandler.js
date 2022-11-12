export function RequestHandeler(req = {}) {
  return Object.freeze({
    body: req.body,
    params: req.params,
    url: req.url,
    method: req.method,
    statusCode: req.statusCode,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    query: req.query,
  });
}

export function RequestRegistration(req = {}) {
  return Object.freeze({
    body: {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      RoleId:req.body.RoleId
    },
    params: req.params,
    url: req.url,
    method: req.method,
    statusCode: req.statusCode,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    query: req.query,
  });
}

export function RequestLogin(req = {}) {
  return Object.freeze({
    body: {
      email: req.body.username,
      password: req.body.password,
      remember:req.body.remember
    },
    params: req.params,
    url: req.url,
    method: req.method,
    statusCode: req.statusCode,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    query: req.query,
  });
}
