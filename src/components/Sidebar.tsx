import React, { useContext, useMemo } from 'react';
import SidebarButton from './SidebarButton';
import { SidebarButtons } from '../constants/site';
import SidebarHeader from './SidebarHeader';
import { DashboardContext } from '../assets/context/DashboardContext';

const defaultStyle = "bg-white h-screen overflow-x-hidden transition ease-in-out duration-300 transition-[width]";

const Sidebar = () => {
  const {dashboard} = useContext(DashboardContext);

  const sidebarStyle = useMemo(() => {
    const sidebarWidth = (dashboard.isSidebarExpanded) ? "w-[300px]" : "w-[60px]";
    return [defaultStyle, sidebarWidth].toString().replace(',', ' ');
  }, [dashboard.isSidebarExpanded]);

  return (
    <div className={sidebarStyle}>
      <SidebarHeader />
      {SidebarButtons.map((item, index) => (
        <SidebarButton 
          key={index}
          icon={item.icon}
          label={item.label}
          path={item.path}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Sidebar;