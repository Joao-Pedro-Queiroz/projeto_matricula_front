import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotaoExcluir = ({ matriculaId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const confirmar = window.confirm("Deseja excluir esta matrícula?");
    if (confirmar) {
      navigate(`/cancelar/${matriculaId}`);
    }
  };

  return (
    <button className="botao-excluir" onClick={handleClick}>
      Excluir
    </button>
  );
};

export default BotaoExcluir;
