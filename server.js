const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Api running!'));

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
