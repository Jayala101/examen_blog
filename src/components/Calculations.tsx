import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Stack, Divider, Alert } from '@mui/material';

const Calculations: React.FC = () => {
  // Area of Triangle
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [triangleArea, setTriangleArea] = useState<number | null>(null);
  const [triangleError, setTriangleError] = useState('');

  // Area of Rectangle
  const [rectBase, setRectBase] = useState('');
  const [rectHeight, setRectHeight] = useState('');
  const [rectArea, setRectArea] = useState<number | null>(null);
  const [rectError, setRectError] = useState('');

  // IVA
  const [amount, setAmount] = useState('');
  const [iva, setIva] = useState<number | null>(null);
  const [ivaError, setIvaError] = useState('');

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
          Cálculos Básicos
        </Typography>
        <Stack spacing={4}>
          {/* Área del Triángulo */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ color: '#90caf9' }}
            >
              Área del Triángulo
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <TextField
                label="Base"
                type="number"
                value={base}
                onChange={e => setBase(e.target.value)}
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: 180 },
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
                label="Altura"
                type="number"
                value={height}
                onChange={e => setHeight(e.target.value)}
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: 180 },
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const b = parseFloat(base);
                  const h = parseFloat(height);
                  if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
                    setTriangleError('Ingrese valores válidos para base y altura.');
                    setTriangleArea(null);
                  } else {
                    setTriangleArea((b * h) / 2);
                    setTriangleError('');
                  }
                }}
                sx={{ minWidth: { xs: '100%', sm: 120 }, fontWeight: 600 }}
              >
                Calcular
              </Button>
            </Stack>
            {triangleError && <Alert severity="error" sx={{ mt: 1 }}>{triangleError}</Alert>}
            {triangleArea !== null && !triangleError && (
              <Typography sx={{ mt: 1 }}>Área: <b>{triangleArea}</b></Typography>
            )}
          </Box>
          <Divider />
          {/* Área del Rectángulo */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ color: '#90caf9' }}
            >
              Área del Rectángulo
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <TextField
                label="Base"
                type="number"
                value={rectBase}
                onChange={e => setRectBase(e.target.value)}
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: 180 },
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
                label="Altura"
                type="number"
                value={rectHeight}
                onChange={e => setRectHeight(e.target.value)}
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: 180 },
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const b = parseFloat(rectBase);
                  const h = parseFloat(rectHeight);
                  if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
                    setRectError('Ingrese valores válidos para base y altura.');
                    setRectArea(null);
                  } else {
                    setRectArea(b * h);
                    setRectError('');
                  }
                }}
                sx={{ minWidth: { xs: '100%', sm: 120 }, fontWeight: 600 }}
              >
                Calcular
              </Button>
            </Stack>
            {rectError && <Alert severity="error" sx={{ mt: 1 }}>{rectError}</Alert>}
            {rectArea !== null && !rectError && (
              <Typography sx={{ mt: 1 }}>Área: <b>{rectArea}</b></Typography>
            )}
          </Box>
          <Divider />
          {/* IVA */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ color: '#90caf9' }}
            >
              Calcular IVA (12%)
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <TextField
                label="Monto"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: 220 },
                  input: {
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    background: '#222',
                    borderRadius: 2,
                  },
                  label: { color: '#ce93d8', fontWeight: 600 },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ce93d8', borderWidth: 2 },
                    '&:hover fieldset': { borderColor: '#ab47bc' },
                  },
                }}
                InputLabelProps={{ style: { color: '#ce93d8', fontWeight: 600 } }}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  const a = parseFloat(amount);
                  if (isNaN(a) || a <= 0) {
                    setIvaError('Ingrese un monto válido.');
                    setIva(null);
                  } else {
                    setIva(a * 0.12);
                    setIvaError('');
                  }
                }}
                sx={{ minWidth: { xs: '100%', sm: 120 }, fontWeight: 600 }}
              >
                Calcular
              </Button>
            </Stack>
            {ivaError && <Alert severity="error" sx={{ mt: 1 }}>{ivaError}</Alert>}
            {iva !== null && !ivaError && (
              <Typography sx={{ mt: 1 }}>IVA (12%): <b>{iva.toFixed(2)}</b></Typography>
            )}
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Calculations;
