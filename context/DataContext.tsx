'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

// Define types/interfaces for form data
interface ContactData {
  name: string;
  phoneNumber: string;
  email: string;
}

interface ProjectData {
  projectTitle: string;
  timeFrame: string;
  services: string[];
  projectDescription: string;
}

interface FormData {
  contact: ContactData;
  project: ProjectData;
}

// Define context type
interface DataContextType {
  formData: FormData;
  updateContactData: (data: Partial<ContactData>) => void;
  updateProjectData: (data: Partial<ProjectData>) => void;
  resetFormData: () => void;
}

// Create context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Custom hook to consume DataContext
export function useDataContext(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
}

// DataProvider component
interface DataProviderProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    contact: {
      name: '',
      phoneNumber: '',
      email: '',
    },
    project: {
      projectTitle: '',
      timeFrame: '',
      services: [],
      projectDescription: '',
    },
  });

  const updateContactData = (data: Partial<ContactData>): void => {
    setFormData((prevData) => ({
      ...prevData,
      contact: { ...prevData.contact, ...data },
    }));
  };

  const updateProjectData = (data: Partial<ProjectData>): void => {
    setFormData((prevData) => ({
      ...prevData,
      project: { ...prevData.project, ...data },
    }));
  };

  const resetFormData = (): void => {
    setFormData({
      contact: {
        name: '',
        phoneNumber: '',
        email: '',
      },
      project: {
        projectTitle: '',
        timeFrame: '',
        services: [],
        projectDescription: '',
      },
    });
  };

  return (
    <DataContext.Provider value={{ formData, updateContactData, updateProjectData, resetFormData }}>
      {children}
    </DataContext.Provider>
  );
}
