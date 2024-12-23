import React, { useEffect, useState } from "react"
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material"

const ProductDashboard = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: "bold", color: "#000" }}
      ></Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: "contain",
                  padding: 2,
                  backgroundColor: "#f0f0f0",
                }}
              />
              <CardContent
                sx={{
                  padding: 2,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#000",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={product.title}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.875rem", color: "#555", mb: 1 }}
                >
                  {product.category}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 700, color: "#000" }}
                >
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductDashboard
