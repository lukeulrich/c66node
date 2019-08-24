const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('up and running').end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening for connections on port', port);
});
