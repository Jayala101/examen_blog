import React from 'react';
import { Stack, TextField, Button, Alert } from '@mui/material';

interface CategoryFormProps {
  name: string;
  description: string;
  error: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  name,
  description,
  error,
  onNameChange,
  onDescriptionChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} style={{ marginBottom: 24 }}>
    <Stack spacing={2}>
      <TextField
        label="Nombre"
        value={name}
        onChange={e => onNameChange(e.target.value)}
        required
        fullWidth
        autoFocus
        sx={{
          maxWidth: { xs: '100%', sm: 350 },
          input: {
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.15rem',
            background: '#222',
            borderRadius: 2,
          },
          label: { color: '#90caf9', fontWeight: 600 },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#90caf9', borderWidth: 2 },
            '&:hover fieldset': { borderColor: '#42a5f5' },
          },
        }}
        InputLabelProps={{ style: { color: '#90caf9', fontWeight: 600 } }}
      />
      <TextField
        label="Descripción"
        value={description}
        onChange={e => onDescriptionChange(e.target.value)}
        fullWidth
        sx={{
          maxWidth: { xs: '100%', sm: 400 },
          input: {
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.15rem',
            background: '#222',
            borderRadius: 2,
          },
          label: { color: '#90caf9', fontWeight: 600 },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#90caf9', borderWidth: 2 },
            '&:hover fieldset': { borderColor: '#42a5f5' },
          },
        }}
        InputLabelProps={{ style: { color: '#90caf9', fontWeight: 600 } }}
      />
      {error && <Alert severity="error">{error}</Alert>}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ fontWeight: 600, minWidth: { xs: '100%', sm: 200 } }}
      >
        Agregar Categoría
      </Button>
    </Stack>
  </form>
);

export default CategoryForm;
