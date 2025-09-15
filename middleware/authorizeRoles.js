function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    // req.user.role is set by authenticateToken middleware
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next(); // proceed if authorized
  };
}

module.exports = authorizeRoles;
