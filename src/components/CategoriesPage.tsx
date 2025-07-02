import React, { useState } from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<{ name: string; description: string }[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('El nombre es obligatorio');
      return;
    }
    setCategories([...categories, { name, description }]);
    setName('');
    setDescription('');
    setError('');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        p: { xs: 1, sm: 2, md: 4 },
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 2, sm: 4 },
          borderRadius: 4,
          width: { xs: '98vw', sm: 600, md: 700 },
          maxWidth: '100vw',
          mx: 'auto',
          background: 'rgba(30, 30, 30, 0.98)',
          color: '#fff',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          textAlign="center"
          sx={{ color: '#90caf9', textShadow: '1px 1px 8px #000a' }}
        >
          Gestión de Categorías
        </Typography>
        <CategoryForm
          name={name}
          description={description}
          error={error}
          onNameChange={setName}
          onDescriptionChange={setDescription}
          onSubmit={handleAddCategory}
        />
        <Divider sx={{ mb: 2 }} />
        <CategoryList categories={categories} />
      </Paper>
    </Box>
  );
};

export default CategoriesPage;
