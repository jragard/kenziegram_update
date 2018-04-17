const express = require('express');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/upload'});
const port = 3000;
const app = express();

const items = [];

app.set('view engine', 'pug');
app.use(express.static('public/upload'));
app.use(express.static('public'))
app.listen(port);

app.get('/', function(req, res) {
    let images = "";
    statusCode = 200;
    const path = './public/upload';
    fs.readdir(path, function(err, items) {
    console.log(items);
//     for (let i = 0; i < items.length; i++) {
//         if (items[i] != ".DS_Store") {
//         images += `<img src="./upload/${items[i]}">`
        
//     }
// }
    
res.render('index', {title: "kenzie", images: items});
});
});

app.post('/upload', upload.single('myFile'), function(req, res, next) {
    console.log("Uploaded: " + req.file.filename);
    items.push(req.file.filename);
    console.log(items);
    res.send(`<p>Image Uploaded</p>` + `<img src="./upload/${items[items.length - 1]}">` + `<a href="http://localhost:3000/"<button>Back</button></a>`);
})