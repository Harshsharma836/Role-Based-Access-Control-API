import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { logger } from "../middleware/log.middleware.js";

const SECRET = process.env.SECRET || "SECRET";
const JWT_EXPIRATION_TIME = "1h";

const userController = {
  registerUser: async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role,
      });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      logger.error(`Error on User Controller : Register User ${error}`);
      res.status(500).json({ message: "Failed to register user" });
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign(
        { email: user.email, role: user.role, isPublic: user.isPublic },
        SECRET,
        {
          expiresIn: JWT_EXPIRATION_TIME,
        },
      );
      res.json({ token });
    } catch (error) {
      logger.error(`Error on User Controller : Login User ${error}`);
      res.status(500).json({ message: "Failed to login user" });
    }
  },

  getUserProfile: async (req, res) => {
    const { email } = req.user;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({
        username: user.username,
        email: user.email,
        role: user.role,
        name: user.name,
        bio: user.bio,
        phone: user.phone,
        photo: user.photo,
        isPublic: user.isPublic,
      });
    } catch (error) {
      logger.error(`Error on User Controller : Get Profile User ${error}`);
      res.status(500).json({ message: "Failed to fetch user profile" });
    }
  },

  editUserProfile: async (req, res) => {
    const { email } = req.user;
    const {
      username,
      password,
      newPassword,
      name,
      bio,
      phone,
      photo,
      isPublic,
    } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (username) {
        user.username = username;
      }

      if (password && newPassword) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ message: "Invalid password" });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
      }

      user.name = name;
      user.bio = bio;
      user.phone = phone;
      user.photo = photo;
      user.isPublic = isPublic;

      await user.save();
      res.json({ message: "User profile updated successfully" });
    } catch (error) {
      logger.error(`Error on User Controller : Edit Profile User ${error}`);
      res.status(500).json({ message: "Failed to update user profile" });
    }
  },

  signOutUser: async (req, res) => {
    try {
      res.status(200).json({ message: "User signed out successfully" });
    } catch (error) {
      logger.error(`Error on User Controller : Sign Out User ${error}`);
      res.status(500).json({ message: "Failed to sign out user" });
    }
  },
};

export default userController;
