import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Matricula from './matricula.jsx';
import CancelarMatricula from './CancelarMatricula.jsx';
import columnsMatricula from './matriculaColumns.jsx';
import Tabletop from './Tabelinha.jsx';

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/matriculas.json')
      .then(response => {
        if (!response.ok) throw new Error('Erro ao carregar os dados');
        return response.json();
      })
      .then(data => setTableData(data))
      .catch(error => console.error('Erro ao buscar JSON:', error));
  }, []);

  const cancelarMatricula = (id) => {
    setTableData(prev =>
      prev.map(m =>
        m.matriculaId === id ? { ...m, status: 'cancelada' } : m
      )
    );
  };

  const excluirMatricula = (id) => {
    setTableData(prev => prev.filter(m => m.matriculaId !== id));
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="matricula-page">
          <h2 className="matricula-title">Gerenciamento de Matrículas</h2>
          <div className="matricula-table-container">
            <Tabletop
              tableData={tableData}
              columns={columnsMatricula({ excluirMatricula })}
              startingTableColumns={[
                'email',
                'cursoId',
                'data',
                'status',
                'matriculaId',
                'mais_info',
                'acoes'
              ]}
            />
          </div>
        </div>
      } />
      <Route path="/cancelar/:id" element={
        <CancelarMatricula cancelarMatricula={cancelarMatricula} />} />
    </Routes>
  );
};

export default App;
