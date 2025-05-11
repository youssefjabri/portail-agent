import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheckAuth = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_JIRA, {
        withCredentials: true, // important si JIRA utilise cookies/session
        headers: {
          Accept: 'application/json',
        },
      });

      // Vérifie si on a une réponse avec tickets
      if (response.data && response.data.values && response.data.values.length > 0) {
        navigate('/interface'); // redirection vers l'interface si OK
      } else {
        setError('Aucune donnée reçue de JIRA.');
      }
    } catch (err) {
      setError('Authentification JIRA échouée ou accès refusé.');
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-600 md:text-5xl lg:text-6xl ">
          Connecter à JIRA Service Desk
        </h1>
        <p className="mb-8 text-lg text-gray-500 ">
          Cliquez pour vérifier l’accès à votre compte JIRA et ouvrir l’espace utilisateur.
        </p>

        <button
          onClick={handleCheckAuth}
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Vérifier l’accès JIRA
        </button>

        {error && (
          <div className="mt-6 text-red-600 font-medium bg-red-100 px-4 py-2 rounded">
            ⚠️ {error}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
