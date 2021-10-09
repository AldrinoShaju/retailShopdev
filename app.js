const express = require('express')
const productSchema = require('./schema/products')
const bodyParser = require('body-parser')
var fs = require('fs');
var path = require('path');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set("view engine", "ejs");
// const obj = {
//     name:"tomato",
//     price:25
// }

var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

const mainProg = ()=> {

    app.get('/products', (req, res) => {
        productSchema.find({}, (err, product)=>{
            if(err){
                console.log(err);
            }else{
                res.render('index', { items: product });
            }
        })
    })

    app.post('/addProduct', upload.single('image'), (req, res)=>{
        // console.log(req.body);
        const {name, brand, marketPrice, sellingPrice} = req.body;

        const newProduct = new productSchema({
            name: name,
            brand: brand,
            marketPrice: marketPrice,
            sellingPrice: sellingPrice,
            img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
        })

        newProduct.save().then(savedProduct => {
            if(savedProduct === newProduct){
                res.send("Save Successfull");
            }else{
                res.send("Save Error")
            }
        });

        // newProduct.create()
    })

    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
}

module.exports = mainProg;

