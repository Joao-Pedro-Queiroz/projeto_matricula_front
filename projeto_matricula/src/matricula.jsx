import React, { useEffect, useState } from 'react';
import Tabletop from './Tabelinha.jsx'; 
import './matricula.css';
import columnsMatricula from './matriculaColumns.jsx';

const Matricula = () => {
  const [tableData, setTableData] = useState([]);

  // Dados mockados (substitua por fetch se necessário)
  const dadosFalsos = [
    {
      email: 'aluno1@email.com',
      cursoId: 'CURSO123',
      data: '2025-04-01',
      status: 'Em andamento',
      matriculaId: 'MAT001'
    },
    {
      email: 'aluno2@email.com',
      cursoId: 'CURSO456',
      data: '2025-03-20',
      status: 'Concluída',
      matriculaId: 'MAT002'
    }
  ];

  useEffect(() => {
    setTableData(dadosFalsos);
  }, []);

  return (
    <div className="matricula-page">
      <h2 className="matricula-title">Gerenciamento de Matrículas</h2>

      <div className="matricula-table-container">
        <Tabletop
        tableData={tableData}
        columns={columnsMatricula}
        startingTableColumns={columnsMatricula.map(col => col.dataIndex ?? col.key)} // garante visibilidade
        />
      </div>
    </div>
  );
};

export default Matricula;


  
