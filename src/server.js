import express from 'express';

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send('I still on going.');
};
const handlerLogin = (req, res) => {
  return res.send('Login here.');
};

app.get('/', handleHome);
app.get('/login', handlerLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
