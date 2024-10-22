import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000; 

// Enable CORS for all routes
app.use(cors());

// Endpoint to fetch HTML content from any URL
app.get('/fetch-html', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    res.send(response.data); // Send HTML content back to the frontend
  } catch (error) {
    console.error('Error fetching HTML:', error);
    res.status(500).send('Failed to fetch HTML content');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
