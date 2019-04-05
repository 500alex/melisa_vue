var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file - файл `avatar`
    // req.body сохранит текстовые поля, если они будут
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files - массив файлов `photos`
    // req.body сохранит текстовые поля, если они будут
})

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files - объект (String -> Array), где fieldname - ключ, и значение - массив файлов
    //
    // например:
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body сохранит текстовые поля, если они будут
})