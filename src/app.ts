import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('We have made first contact!');
});
app.listen(port, () => console.log('Listening on port - ' + port)).on('error', (err: Error) => {
  console.error(err);
});