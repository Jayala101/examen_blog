import React, { useState } from 'react';

const Calculations: React.FC = () => {
  // Area of Triangle
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [triangleArea, setTriangleArea] = useState<number | null>(null);

  // Area of Rectangle
  const [rectBase, setRectBase] = useState('');
  const [rectHeight, setRectHeight] = useState('');
  const [rectArea, setRectArea] = useState<number | null>(null);

  // IVA
  const [amount, setAmount] = useState('');
  const [iva, setIva] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Cálculos Básicos</h2>
      <div style={{ marginBottom: 32 }}>
        <h3>Área del Triángulo</h3>
        <input
          type="number"
          placeholder="Base"
          value={base}
          onChange={e => setBase(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura"
          value={height}
          onChange={e => setHeight(e.target.value)}
          style={{ marginLeft: 8 }}
        />
        <button
          style={{ marginLeft: 8 }}
          onClick={() => {
            const b = parseFloat(base);
            const h = parseFloat(height);
            if (!isNaN(b) && !isNaN(h)) setTriangleArea((b * h) / 2);
          }}
        >Calcular</button>
        {triangleArea !== null && (
          <div>Área: <b>{triangleArea}</b></div>
        )}
      </div>
      <div style={{ marginBottom: 32 }}>
        <h3>Área del Rectángulo</h3>
        <input
          type="number"
          placeholder="Base"
          value={rectBase}
          onChange={e => setRectBase(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura"
          value={rectHeight}
          onChange={e => setRectHeight(e.target.value)}
          style={{ marginLeft: 8 }}
        />
        <button
          style={{ marginLeft: 8 }}
          onClick={() => {
            const b = parseFloat(rectBase);
            const h = parseFloat(rectHeight);
            if (!isNaN(b) && !isNaN(h)) setRectArea(b * h);
          }}
        >Calcular</button>
        {rectArea !== null && (
          <div>Área: <b>{rectArea}</b></div>
        )}
      </div>
      <div>
        <h3>Calcular IVA (12%)</h3>
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button
          style={{ marginLeft: 8 }}
          onClick={() => {
            const a = parseFloat(amount);
            if (!isNaN(a)) setIva(a * 0.12);
          }}
        >Calcular</button>
        {iva !== null && (
          <div>IVA (12%): <b>{iva.toFixed(2)}</b></div>
        )}
      </div>
    </div>
  );
};

export default Calculations;
