const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.post('/upload', upload.single('file'), function(req, res) {
  const {size} = req.file;
  res.json({size});
});

module.exports = app;
