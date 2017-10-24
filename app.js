const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.use(express.static('public'));

app.post('/upload', upload.single('file'), function(req, res) {
  const {originalname: name, size} = req.file;
  res.json({name, size});
});

module.exports = app;
