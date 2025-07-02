import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';



const Home: React.FC = () => {


  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        p: { xs: 1, sm: 2, md: 4 },
        boxSizing: 'border-box',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        color: '#fff',
        textShadow: '2px 2px 8px #0008',
        mb: 2,
        fontSize: { xs: '2.2rem', sm: '3.5rem', md: '4rem' },
        textAlign: 'center',
      }}
      gutterBottom
    >
      Bienvenido a la Gestión de Categorías
    </Typography>
    <Typography
      variant="h5"
      sx={{
        color: '#bdbdbd',
        mb: 3,
        fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
        textAlign: 'center',
      }}
      gutterBottom
    >
      Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
    </Typography>
    <Paper
      elevation={6}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        overflow: 'hidden',
        width: { xs: '98vw', sm: 600, md: 800 },
        maxWidth: '100vw',
        mb: 4,
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
      }}
    >
      <img
        src="https://picsum.photos/id/1060/800/300"
        alt="Slide 1"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover',
          maxHeight: '40vh',
          minHeight: 120,
        }}
      />
    </Paper>

    {/* ...existing code... */}
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      justifyContent="center"
      sx={{ mt: 4, width: '100%', maxWidth: 600 }}
    >
      <Button
        component={Link}
        to="/categories"
        variant="contained"
        color="primary"
        size="large"
        sx={{
          minWidth: { xs: '100%', sm: 200 },
          fontWeight: 600,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          boxShadow: 3,
        }}
      >
        Gestión de Categorías
      </Button>
      <Button
        component={Link}
        to="/calculations"
        variant="outlined"
        color="secondary"
        size="large"
        sx={{
          minWidth: { xs: '100%', sm: 200 },
          fontWeight: 600,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          borderWidth: 2,
          boxShadow: 3,
        }}
      >
        Cálculos Básicos
      </Button>
    </Stack>
  </Box>
  );
};

export default Home;
