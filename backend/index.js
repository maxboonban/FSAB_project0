import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  // Respond with JSON
  res.json({ message: 'Hello from the Express backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});