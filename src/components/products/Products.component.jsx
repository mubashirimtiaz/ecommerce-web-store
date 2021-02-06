import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./product/Product.component";

const products = [
  { id: 1, name: "Shoe", description: "Running Shoe", price: "$5" },
  { id: 2, name: "Macbook", description: "Apple Macbook", price: "$10" },
  { id: 3, name: "Macbook", description: "Apple Macbook", price: "$10" },
  { id: 4, name: "Macbook", description: "Apple Macbook", price: "$10" },
  { id: 5, name: "Macbook", description: "Apple Macbook", price: "$10" },
  { id: 6, name: "Macbook", description: "Apple Macbook", price: "$10" },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
