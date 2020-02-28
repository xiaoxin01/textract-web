var express = require('express');
var router = express.Router();
// https://github.com/dbashford/textract
var textract = require('textract');

/* POST ocr */
router.post('/', function (req, res) {
    let file = req.files.foo;
    textract.fromBufferWithName(file.name, file.data, function (error, text) {
        if (error != null) {
            res.send(error);
            return;
        }
        res.send(text);
    })
});

module.exports = router;
