import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import CategoriesPage from './components/CategoriesPage';
import Calculations from './components/Calculations';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <AppBar position="static" sx={{ background: 'rgba(30,30,30,0.98)', boxShadow: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '.1rem',
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            Exam Blog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }} />
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ fontWeight: location.pathname === '/' ? 700 : 400, borderBottom: location.pathname === '/' ? '2px solid #fff' : 'none', borderRadius: 0, mx: 1 }}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/categories"
            color="inherit"
            sx={{ fontWeight: location.pathname === '/categories' ? 700 : 400, borderBottom: location.pathname === '/categories' ? '2px solid #fff' : 'none', borderRadius: 0, mx: 1 }}
          >
            Categorías
          </Button>
          <Button
            component={Link}
            to="/calculations"
            color="inherit"
            sx={{ fontWeight: location.pathname === '/calculations' ? 700 : 400, borderBottom: location.pathname === '/calculations' ? '2px solid #fff' : 'none', borderRadius: 0, mx: 1 }}
          >
            Cálculos
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const App: React.FC = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/calculations" element={<Calculations />} />
    </Routes>
  </Router>
);

export default App;
