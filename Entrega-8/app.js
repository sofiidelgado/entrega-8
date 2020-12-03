const http = require('http');
const express = require('express');
const app = express();
const products = require('./JSON/products.json');
const category = require('./JSON/category.json');
const cart = require('./JSON/cart.json');


app.get('/', (req, res) => {
    res.send('Holis')
});

app.get('/products', function(req , res){
    res.json(products);
});
app.get('/category', function(req , res){
    res.json(category);
});
app.get('/cart', function(req , res){
    res.json(cart);
});


const port = 3003;
const server = http.createServer(app); 
server.listen(port);
console.debug('Funcionando en puerto ' + port);