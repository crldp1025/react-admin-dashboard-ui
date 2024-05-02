import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardProvider from '../assets/context/DashboardContext';

interface ISiteContainerProps {
  children?: ReactNode;
}

const SiteContainer = ({children}: ISiteContainerProps) => {

  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SiteContainer;