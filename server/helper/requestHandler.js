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
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
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
      username: req.body.username,
      email: req.body.username,
      password: req.body.password,
      phone: req.body.username,
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
