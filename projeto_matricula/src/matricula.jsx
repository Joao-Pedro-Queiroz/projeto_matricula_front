import React, { useEffect, useState } from 'react';
import Tabletop from './Tabelinha.jsx'; 
import './matricula.css';
import columnsMatricula from './matriculaColumns.jsx';

const Matricula = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/matriculas.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        return response.json();
      })
      .then(data => setTableData(data))
      .catch(error => console.error('Erro ao buscar JSON:', error));
  }, []);

  return (
    <div className="matricula-page">
      <h2 className="matricula-title">Gerenciamento de Matrículas</h2>
      <div className="matricula-table-container">
        <Tabletop
          tableData={tableData}
          columns={columnsMatricula}
          startingTableColumns={[
            'email',
            'cursoId',
            'data',
            'status',
            'matriculaId',
            'mais_info',
            'acoes' // adiciona explicitamente a coluna 'Ações'
          ]}          
        />
      </div>
    </div>
  );
};

export default Matricula;
