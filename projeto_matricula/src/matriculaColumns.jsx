import { Link } from 'react-router-dom';

const columnsMatricula = ({ cancelarMatricula, excluirMatricula }) => [
  {
    title: 'Email do Aluno',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'ID do Curso',
    dataIndex: 'cursoId',
    key: 'cursoId'
  },
  {
    title: 'Data da Matrícula',
    dataIndex: 'data',
    key: 'data'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'ID Matrícula',
    dataIndex: 'matriculaId',
    key: 'matriculaId'
  },
  {
    title: 'Mais informações',
    key: 'mais_info',
    render: (_, record) => (
      <Link to={`/matricula/${record.matriculaId}`}>
        <button className="botao-ver">Ver</button>
      </Link>
    )
  },
  {
    title: 'Ações',
    key: 'acoes',
    render: (_, record) => {
      return (
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Mostrar botão Cancelar somente se o status NÃO for 'cancelada' */}
          {record.status !== 'cancelada' && (
            <Link to={`/cancelar/${record.matriculaId}`}>
              <button className="botao-cancelar">Cancelar</button>
            </Link>
          )}
  
          {/* Botão Excluir sempre aparece */}
          <button
            className="botao-excluir"
            onClick={() => excluirMatricula(record.matriculaId)}
          >
            Excluir
          </button>
        </div>
      );
    }
  }
  
  
];

export default columnsMatricula;
