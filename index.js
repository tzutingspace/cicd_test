const express = require('express')

const app = express()

app.get('/cicdtest', (req, res) => {
  res.send('Ver 1');
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});