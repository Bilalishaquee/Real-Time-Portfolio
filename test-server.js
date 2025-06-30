import express from 'express';

const app = express();
const port = 3004;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Test server running on port ${port}`);
});