import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb+srv://ianis:TartanHacks2025@tartanhacks2025.9lwam.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Example route to handle GET requests
app.get('/data', (req, res) => {
  // Sample data from MongoDB
  res.json({ message: 'Hello from the server!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
