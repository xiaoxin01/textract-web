var express = require('express');
var router = express.Router();
// https://github.com/dbashford/textract
var textract = require('textract');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST ocr */
router.post('/', function (req, res) {
  let file = req.files.file;
  textract.fromBufferWithName(file.name, file.data, function (error, text) {
    if (error != null) {
      res.send(error);
      return;
    }
    res.send(text);
  })
});

module.exports = router;
