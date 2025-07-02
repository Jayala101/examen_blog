import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';

const Home: React.FC = () => (
  <Box sx={{ textAlign: 'center', mt: 5 }}>
    <Typography variant="h3" gutterBottom>Bienvenido a la Gestión de Categorías</Typography>
    <Typography variant="subtitle1" gutterBottom>
      Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
    </Typography>
    <Paper elevation={3} sx={{ display: 'inline-block', borderRadius: 2, overflow: 'hidden', mt: 2 }}>
      <img src="https://picsum.photos/id/1060/800/300" alt="Slide 1" style={{ maxWidth: '100%', display: 'block' }} />
    </Paper>
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
      <Button component={Link} to="/categories" variant="contained" color="primary">
        Gestión de Categorías
      </Button>
      <Button component={Link} to="/calculations" variant="outlined" color="primary">
        Cálculos Básicos
      </Button>
    </Stack>
  </Box>
);

export default Home;
