import React from 'react';

import ProjectDetails from 'app/components/ProjectDetails';

import { DataProvider } from '../../../context/DataContext';

export default function page() {
  return (
    <div>
      <DataProvider>
        <ProjectDetails />
      </DataProvider>
    </div>
  );
}
