import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/routes/userRoutes.js'
import adminRoutes from './src/routes/adminRoutes.js'
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// Load environment variables
dotenv.config();

// Load Swagger documentation
const swaggerDocument = YAML.load('./swagger.yaml');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json("Hello Test");
});

app.use('/user', userRoutes);
app.use('/admin' , adminRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

export default app;
