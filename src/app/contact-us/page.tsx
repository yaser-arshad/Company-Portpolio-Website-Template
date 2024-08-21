import React from 'react';

import ContactUs1 from 'app/components/ContactUs1';

import { DataProvider } from '../../../context/DataContext';

export default function page() {
  return (
    <div>
      <DataProvider>
        <ContactUs1 />
      </DataProvider>
    </div>
  );
}
