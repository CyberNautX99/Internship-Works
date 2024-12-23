import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style


const Navbar = () => {
  return (
    <Grid container>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
         
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontWeight: 2000,
              color: '#fff',
              fontFamily: 'Poppins',
              display: 'flex',
              alignItems: 'center',
              margin: '20px',
              
            }}
          >
            PuthiyaBazaar
          </Typography>

         
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            component={Link}
            to="/"
            sx={{
              backgroundColor: '#ffff',
              color: '#000',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              textDecorationColor: '#000',
              '&:hover': {
                backgroundColor: '#f1f8e9',
                color: '#74a8fc',
              },
            }}
          >
            Home
          </Button>

       
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            component={Link}
            to="/add-product"
            sx={{
              backgroundColor: '#ffff',
              color: '#000',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#f1f8e9',
                color: '#74a8fc',
              },
            }}
          >
            Add Product
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Navbar
