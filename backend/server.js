const fs = require('fs');
const express = require("express");
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use('/', express.static('public'))
const filePath = './data.json';

// Due to time constraint maintaining it in the memory.
cart = []

app.get('/api/products', (req,res)=>{
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.status(500).json({ error: 'Error reading the file' });
          return;
        }

        try {
          const jsonData = JSON.parse(data);
          res.json(jsonData);
        } catch (error) {
          res.status(500).json({ error: 'Error parsing JSON' });
        }
      });
})

app.post('/api/addProductToCart', (req,res)=>{
  cart.push(req.body);
  res.json(req.body);
})

app.get('/showCart', (req,res) =>{
  res.send(cart)
})

app.listen(port, ()=>{
    console.log(`Example app listening at port ${port}`)
})