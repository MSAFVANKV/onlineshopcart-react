const express = require('express');
const cors = require('cors');
const products = require("./products")

const app = express();

app.use(express.json());

app.use(cors())

app.get("/", (req,res) => {

})
app.get("/products", (req,res) => {
    res.send(products)
})
const PORT = process.env.PORT || 8001

app.listen(PORT,console.log(`server on http://localhost:${PORT}`))