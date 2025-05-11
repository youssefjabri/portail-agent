import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold text-blue-600 md:text-5xl">
          Connecter à JIRA Service Desk
        </h1>
        <p className="mb-8 text-lg text-gray-500">
          Cliquez pour vérifier l’accès à votre compte JIRA et ouvrir l’espace utilisateur.
        </p>

        <button onClick={() => navigate('/user')}>
          Se connecter à JIRA
        </button>

      </div>
    </section>
  );
};

export default Home;
