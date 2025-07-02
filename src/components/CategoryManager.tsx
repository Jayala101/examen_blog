import React, { useState } from 'react';

interface Category {
  name: string;
  description: string;
}

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
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
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Gestión de Categorías</h2>
      <form onSubmit={handleAddCategory} style={{ marginBottom: 24 }}>
        <div>
          <label>Nombre: </label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Descripción: </label>
          <input value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        <button type="submit" style={{ marginTop: 12 }}>Agregar Categoría</button>
      </form>
      <h3>Listado de Categorías</h3>
      {categories.length === 0 ? (
        <p>No hay categorías registradas.</p>
      ) : (
        <ul>
          {categories.map((cat, idx) => (
            <li key={idx}><b>{cat.name}</b>: {cat.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryManager;
