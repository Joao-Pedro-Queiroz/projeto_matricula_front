import React, { useEffect, useState } from 'react';
import Tabletop from './Tabelinha.jsx';
import './matricula.css';
import columnsMatricula from './matriculaColumns.jsx';

const Matricula = ({ onExcluir }) => {
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

  const excluirMatricula = (id) => {
    setTableData(prev => prev.filter(m => m.matriculaId !== id));
  };

  return (
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
  );
};

export default Matricula;
