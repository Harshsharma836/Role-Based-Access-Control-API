import User from "../models/userModel.js";
import { logger } from "../middleware/log.middleware.js";

const adminController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      const userProfiles = users.map((user) => ({
        username: user.username,
        email: user.email,
        role: user.role,
        name: user.name,
        bio: user.bio,
        phone: user.phone,
        photo: user.photo,
        isPublic: user.isPublic,
      }));
      res.json(userProfiles);
    } catch (error) {
      logger.error(`Error on Admin Controller : Get All User ${error}`);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  },

  signOutAdmin: async (req, res) => {
    try {
      res.status(200).json({ message: "Admin signed out successfully" });
    } catch (error) {
      logger.error(`Error on Admin Controller : Sign Out Admin ${error}`);
      res.status(500).json({ message: "Failed to sign out admin" });
    }
  },
};

export default adminController;
