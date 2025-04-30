import { Link } from 'react-router-dom';

const columnsMatricula = [
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
  }
];

export default columnsMatricula;
