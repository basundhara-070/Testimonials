import express from 'express';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import testimonialRoutes from './routes/testimonialRoute.js';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
const whitelist = ['http://localhost:3000', 'http://example.com']; // Add your allowed origins here
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to the database
connectDB();

// Routes
app.use('/api/testimonials', testimonialRoutes);

// Test route to check server status
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
