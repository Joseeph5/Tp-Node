const express = require('express');
const routes = require('./routes/voiture');

const app = express();

app.use(express.json());

app.use('/voiture', routes);

app.post('/create', (req, res) => {
  console.log(req.body);
});

app.get('/:prenom/:nom', (req, res) => {
  const { nom, prenom } = req.params;
});

app.get('/welcome', (req, res) => {
  res.json({ status: 200, message: 'Welcome!' });
});

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.redirect('https://www.google.com/');
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
