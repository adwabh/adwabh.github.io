import React from 'react';
import Layout from './Layout';
import type { RouteRecord } from 'vite-react-ssg';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'a',
        lazy: async () => {
          const Component = (await import('./pages/a.tsx')).default;
          return { Component };
        },
        entry: 'src/pages/a.tsx',
      },
      {
        index: true,
        Component: React.lazy(() => import('./pages/index.tsx')),
        entry: 'src/pages/index.tsx',
      },
      {
        path: 'nest/:b',
        lazy: async () => {
          const Component = (await import('./pages/nest/[b].tsx')).default;
          return { Component };
        },
        getStaticPaths: () => ['nest/b1', 'nest/b2'],
        entry: 'src/pages/nest/[b].tsx',
      },
    ],
  },
];