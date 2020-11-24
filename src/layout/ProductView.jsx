import React from "react";
import { useProducts } from "../store/ProductsContext";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Toolbar from "@material-ui/core/Toolbar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Star from "@material-ui/icons/Star";

const ProductView = (props) => {
  const id = props.match.params.id;

  const { products } = useProducts();

  // ugly hack (products.find() not working...)
  const product = products[id - 1];

  console.log(product);

  return (
    <div className="root">
      <Navbar />
      <Toolbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          border: "1px solid black",
          flexGrow: 1,
          padding: 20,
          backgroundColor: "#FAFAFA",
        }}
        className="content"
      >
        <Card style={{ display: "flex", padding: 25 }}>
          <CardMedia
            image={product.image}
            title={product.title}
            style={{
              color: "black",
              objectFit: "contain",
              maxWidth: 400,
              height: 400,
            }}
            component="img"
          />
          <div style={{ maxWidth: 400 }}>
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1">{"$ " + product.price}</Typography>
              <Typography>
                {Array(product.rating)
                  .fill()
                  .map((_, index) => (
                    <span key={index}>
                      <Star style={{ color: "gold" }} />
                    </span>
                  ))}
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                doloribus id vel mollitia, nobis aliquid inventore ea debitis?
                Corrupti illo, officia pariatur reiciendis tempore quos aut
                doloribus, magni fugit voluptate dignissimos sint nesciunt
                quaerat minima natus blanditiis ipsum molestiae. Officia velit
                quam animi unde molestiae dolor, error et hic fuga?
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="medium" color="secondary">
                Add to Cart
              </Button>
            </CardActions>
          </div>
        </Card>
      </Box>
      <Footer />
    </div>
  );
};

export default ProductView;
