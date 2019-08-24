const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const x = process.env.SETTINGS || 'x';
  res.send('up and running: ' + x).end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening for connections on port', port);
});
