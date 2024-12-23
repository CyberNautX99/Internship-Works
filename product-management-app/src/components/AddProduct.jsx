import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import {AddCircleOutline as AddIcon } from '@mui/icons-material'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    image: '',
    price: '',
    category: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Product submitted:', formData)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 5,
        p: 3,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 600, mb: 2, color: '#000' }}
      >
        Add Product
      </Typography>
      <TextField
        fullWidth
        label="Product Name"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
          fullWidth
          label="Image URL"
          name="image"
          type="file"
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
          sx={{ flex: 1 }}
        />
      <TextField
        fullWidth
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Box display="flex" justifyContent="space-between" mt={3}>
     
        <Button
          endIcon={<AddIcon />}
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            flex: 1,
            ml: 1,
            fontSize: '0.9rem',
            textTransform: 'capitalize',
            backgroundColor: '#000',
            '&:hover': {
              backgroundColor: '#000',
              color: '#74a8fc',
            },
          }}
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  )
}

export default AddProduct
