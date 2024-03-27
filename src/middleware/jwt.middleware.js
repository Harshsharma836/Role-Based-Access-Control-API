import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET || "SECRET";
const TOKEN_EXPIRATION_TIME = "1h";

let tokenBlacklist = [];

export const addToBlacklist = (token) => {
  tokenBlacklist.push(token);
};

export const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token && !tokenBlacklist.includes(token)) {
    jwt.verify(token, SECRET, (err, decoded) => {
      console.log(err)
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  };
};

export const authorizeProfileVisibility = (req, res, next) => {
  if (req.user.role === "admin") {
    return next();
  }
  if (!req.user.isPublic) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};
