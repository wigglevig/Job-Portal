import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    Container,
  } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <WorkIcon sx={{ mr: 1.5, fontSize: 32 }} />
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                letterSpacing: 0.5
              }}
            >
              Job Portal
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button 
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{ 
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.95rem',
                px: 2,
                borderRadius: 2,
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s'
              }}
            >
              Home
            </Button>
            <Button 
              component={Link}
              to="/create"
              startIcon={<AddCircleIcon />}
              sx={{ 
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.95rem',
                px: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s'
              }}
            >
              Add Job
            </Button>
            <Button 
              startIcon={<ContactMailIcon />}
              href='https://github.com/wigglevig'
              target="_blank"
              sx={{ 
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.95rem',
                px: 2,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s'
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
