import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Ações Disponíveis</h1>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200">
          Visualizar
        </button>
        <button
          onClick={() => navigate('/edit-pdf')}
          className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-200"
        >
          Editar
        </button>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200">
          Baixar
        </button>
      </div>
    </div>
  );
}

export default Home;
