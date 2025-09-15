const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Get token from Authorization header (expected format: 'Bearer <token>')
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token part

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    // Add user data to req for downstream use
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    };

    next(); // Proceed to next middleware or route handler
  });
}

module.exports = authenticateToken;
