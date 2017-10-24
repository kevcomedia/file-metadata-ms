const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.use(express.static('public'));

app.post('/upload', upload.single('file'), function(req, res) {
  if (req.file) {
    const {originalname: name, size} = req.file;
    return res.json({name, size});
  } else {
    return res.sendStatus(400);
  }
});

module.exports = app;
