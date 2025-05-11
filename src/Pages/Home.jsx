import React from 'react';

const Home = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4  mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-700 md:text-5xl lg:text-6xl ">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-md font-normal text-gray-900 lg:text- sm:px-16 xl:px-48 text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value
          and drive economic growth.
        </p>
        <a href={import.meta.env.VITE_API_JIRA} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
          Se Connecter
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
