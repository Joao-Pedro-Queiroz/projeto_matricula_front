import React from 'react';
import { useParams } from 'react-router-dom';

const CancelarMatricula = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Cancelar Matrícula</h2>
      <table border="1" cellPadding="10" style={{ marginBottom: '1rem' }}>
        <thead>
          <tr>
            <th>ID da Matrícula</th>
            <th>Motivo</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td><input type="text" placeholder="Digite o motivo..." style={{ width: '100%' }} /></td>
            <td><input type="date" style={{ width: '100%' }} /></td>
          </tr>
        </tbody>
      </table>
      <button>Confirmar Cancelamento</button>
    </div>
  );
};

export default CancelarMatricula;
