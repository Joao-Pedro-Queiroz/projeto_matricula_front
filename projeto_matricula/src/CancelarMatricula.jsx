import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './matricula.css'; // Usa o mesmo CSS da tela principal

const CancelarMatricula = ({ cancelarMatricula }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState('');
  const [data, setData] = useState('');

  const handleConfirmar = () => {
    if (!motivo || !data) {
      alert("Preencha todos os campos");
      return;
    }

    cancelarMatricula(id);
    navigate('/');
  };

  return (
    <div className="matricula-page">
      <h2 className="matricula-title">Cancelar Matrícula</h2>
      <div className="matricula-table-container">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#e6e6e6' }}>
              <th style={thStyle}>ID da Matrícula</th>
              <th style={thStyle}>Motivo</th>
              <th style={thStyle}>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>{id}</td>
              <td style={tdStyle}>
                <input
                  type="text"
                  value={motivo}
                  onChange={e => setMotivo(e.target.value)}
                  style={inputStyle}
                  placeholder="Digite o motivo..."
                />
              </td>
              <td style={tdStyle}>
                <input
                  type="date"
                  value={data}
                  onChange={e => setData(e.target.value)}
                  style={inputStyle}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '1rem' }}>
          <button className="botao-excluir" onClick={handleConfirmar}>
            Confirmar Cancelamento
          </button>
        </div>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ccc',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const inputStyle = {
  width: '100%',
  padding: '6px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

export default CancelarMatricula;
