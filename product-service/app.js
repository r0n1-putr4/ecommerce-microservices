const express = require("express");
const app = express();

// dummy data
products = [
  {
    id: 1,
    name: "Produk 1",
    description: "Ini adalah produk 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Produk 2",
    description: "Ini adalah produk 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Produk 3",
    description: "Ini adalah produk 3",
    price: 3000,
  },
];

// get all data products
app.get("/products", (req, res) => {
  res.send(products);
});

// get single data products by id
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id == id);

  if (!product) {
    return res.status(404).json({
      success: 0,
      message: "Data tidak ditemukan",
    });
  }

  res.send(product);
});

// server running
app.listen(3000, () => {
  console.log("Server running http://localhost:3000/products");
});
