import React from "react";
import FilterComponent from "./FilterComponent"; // Your FilterComponent
import ProductCard from "./ProductCard"; // Your ProductCard
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import "./Productpage.css"
import DiscoverOurProducts from "./DiscoverOurProducts";
import FilterBar from "./FilterBar";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const products = [
  {
    imageUrl: "/image/img.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img1.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img1.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img1.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
  {
    imageUrl: "/image/img1.jpg",
    productName: "PRODUCT NAME",
    status: "Sign in to view price",
  },
];

const ProductPage = () => {
  return (
    <div className="">
        <DiscoverOurProducts/>
        <FilterBar/>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs:3 }}>
          <Item> <FilterComponent /></Item>
        </Grid>
        <Grid size={{ xs: 9, md: 9 }}>
          <Item>  <div className="productGrid">
            {products.map((item) => (
              <ProductCard product={item} />
            ))}
            </div></Item>
        </Grid>
        
      </Grid>
    </Box>
    </div>
  );
};

export default ProductPage;
