import React, { useContext, useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Button from './Button';
import { DashboardContext } from '../assets/context/DashboardContext';

const SidebarHeader = () => {
  const {dashboard, setDashboard} = useContext(DashboardContext);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(dashboard.isSidebarExpanded);

  let timeout: ReturnType<typeof setTimeout>;

  const toggleHeader = () => {
    if(!dashboard.isSidebarExpanded) {
      timeout = setTimeout(() => {
        setIsHeaderVisible(false);
      }, 300);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    clearTimeout(timeout);

    toggleHeader();
  }, [dashboard.isSidebarExpanded]);

  return (
    <div className="relative flex items-center h-[60px]">
      {isHeaderVisible &&
        <div className="w-[300px] text-4xl font-bold text-sky-400 ml-4">
          Dashboard
        </div>
      }
      <Button 
        className="w-[60px] px-4 h-full hover:text-sky-400 absolute right-0 bg-white"
        onClick={() => setDashboard({...dashboard, isSidebarExpanded: !dashboard.isSidebarExpanded})}>
        <GiHamburgerMenu />
      </Button>
    </div>
  );
};

export default SidebarHeader;