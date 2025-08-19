import React from 'react';
import { useParams } from 'react-router-dom';

const NestedBPage: React.FC = () => {
  const { b } = useParams();

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nested: {b}</h1>
      <p className="text-gray-600 dark:text-gray-300">This is a dynamic route page rendered for the path parameter.</p>
    </section>
  );
};

export default NestedBPage;


