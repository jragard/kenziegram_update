const express = require('express');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/upload'});
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose')

const items = [];

app.set('view engine', 'pug');
app.use(express.static('public/upload'));
app.use(express.static('public'))
app.listen(port, () => mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URI}/${DB_NAME}`));

app.get('/', function(req, res) {
    let images = "";
    statusCode = 200;
    const path = './public/upload';
    fs.readdir(path, function(err, items) {
    console.log(items);
    
res.render('index', {title: "kenzie", images: items});
});
});

app.post('/upload', upload.single('myFile'), function(req, res, next) {
    console.log("Uploaded: " + req.file.filename);
    items.push(req.file.filename);
    console.log(items);
    res.send(`<p>Image Uploaded</p>` + `<img src="./upload/${items[items.length - 1]}">` + `<a href="http://localhost:3000/"<button>Back</button></a>`);
})

const DB_USER = "admin"
const DB_PASSWORD = "admin"
const DB_URI =  "ds217310.mlab.com:17310"
const DB_NAME = "kenziegram-ryan"