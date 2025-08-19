import React from 'react';

const APage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page A</h1>
      <p className="text-gray-600 dark:text-gray-300">This is a lazily loaded route.</p>
    </section>
  );
};

export default APage;


