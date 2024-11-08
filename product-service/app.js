const express = require("express");
const app = express();

//dummy data
products = [
  {
    id: 1,
    name: "Macbook Pro M2",
    description: "This is a Macbook Pro M2",
    price: 20000000,
  },
  {
    id: 2,
    name: "Iphone 16 Pro",
    description: "This is an Iphone 16 Pro",
    price: 15000000,
  },
  {
    id: 3,
    name: "Samsung Galaxy S20",
    description: "This is a Samsung Galaxy S20",
    price: 12000000,
  },
];

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  req.send(product);
});

app.listen(3000, () => {
  console.log("Product service is running http://localhost:3000 on port 3000");
});
