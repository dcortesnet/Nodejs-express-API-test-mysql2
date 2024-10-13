const jwt = require('jsonwebtoken');
const secretJWTKey = 'secretJWTKey';

const verifyTokenMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).send("Token is required");
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, secretJWTKey, (err, decoded) => {
    if (err) {
      return res.status(401).send("Token invalid");
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
   verifyTokenMiddleware,
   secretJWTKey
}
