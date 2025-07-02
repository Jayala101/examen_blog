import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

interface Category {
  name: string;
  description: string;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => (
  <>
    <Typography
      variant="h6"
      fontWeight={600}
      gutterBottom
      sx={{ color: '#90caf9' }}
    >
      Listado de Categorías
    </Typography>
    {categories.length === 0 ? (
      <Typography sx={{ color: '#bdbdbd' }}>No hay categorías registradas.</Typography>
    ) : (
      <List sx={{ width: '100%', maxWidth: 500, mx: 'auto', bgcolor: 'transparent' }}>
        {categories.map((cat, idx) => (
          <ListItem key={idx} divider sx={{ flexDirection: 'column', alignItems: 'flex-start', bgcolor: 'transparent', color: '#fff', borderColor: '#333' }}>
            <ListItemText
              primary={<b>{cat.name}</b>}
              secondary={cat.description}
              primaryTypographyProps={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }}
              secondaryTypographyProps={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}
            />
          </ListItem>
        ))}
      </List>
    )}
  </>
);

export default CategoryList;
