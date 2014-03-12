// Here, the response isn't important, the HTTP status is.
// Also, we don't redirect anywhere since this is just called
// by AngularJS.

// curl -X POST http://localhost:5000/login -H "Content-Type: application/json" --data '{"password": "test"}'

// http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local
// http://stackoverflow.com/questions/14572600/passport-js-restful-auth
// http://passportjs.org/guide/authenticate/
exports.login = function (req, res) {
  req.accepts('json');
  if (req.body.password == 'test') {
    res.json({});
  } else {
    res.json(401, {});
  }
};
