const express = require('express')
const productSchema = require('./schema/products')
const ejs = require("ejs");
const bodyParser = require('body-parser')
var fs = require('fs');
var path = require('path');
const app = express()

const category = require('./localStorage/category');
const products = require('./localStorage/products');

const port = 3000



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("public"));


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

    app.get("/", (req, res)=>{
        res.render('home',{"items": products, "cat": category});
    })

    app.get('/category/:category', (req, res) => {
        // productSchema.find({}, (err, product)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         res.render('home', { items: product });
        //     }
        // })

        if(req.params.category==="Home"){
            res.redirect("/");
        }else{
            let productItems = products.filter(product=>product.category===req.params.category);
            res.render('home',{"items": productItems, "cat": category});
        }
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

    app.get("/productID/:id", (req, res)=>{
       
        let selectedProduct = products.filter(product=>product.id==req.params.id)
        // console.log(selectedProduct);
        res.render("productDetails", {"product":selectedProduct})
    })

    app.get("/addCart", (req, res)=>{
        res.send("Add to Cart Clicked")
    })
    
    app.get("/buyNow", (req, res)=>{
        res.send("Buy Now Clicked")
    })

    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
}

module.exports = mainProg;

