import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import Button from './Button';
import { ISidebarButtonProps } from '../interfaces/Site';
import { useLocation, useNavigate } from 'react-router-dom';
import { DashboardContext } from '../assets/context/DashboardContext';

const SidebarButton = ({icon, label, path, type = 'default'}: ISidebarButtonProps) => {
  const {dashboard} = useContext(DashboardContext);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(dashboard.isSidebarExpanded);
  const [isActive, setIsActive] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const buttonWidth = useMemo(() => {
    return (isContentVisible) ? "w-[300px] pr-4" : "w-full";
  }, [isContentVisible]);

  const buttonStyle = useMemo(() => {
    console.log(type)
    const defaultColor = (type === 'danger') ? "text-red" : "text-black";
    const button = (isActive) ? "border-slate-100 text-green-700" : `border-white ${defaultColor} hover:bg-slate-200`;
    const buttonWrapper = (isActive) ? "bg-slate-100" : "bg-white";

    return {
      button: button,
      buttonWrapper: buttonWrapper
    };
  }, [isActive, type]);

  let timeout: ReturnType<typeof setTimeout>;

  const toggleButtonContent = () => {
    if(!dashboard.isSidebarExpanded) {
      timeout = setTimeout(() => {
        setIsContentVisible(false);
      }, 300);
    } else {
      setIsContentVisible(true);
    }
  };

  useEffect(() => {
    clearTimeout(timeout);

    toggleButtonContent();
  }, [dashboard.isSidebarExpanded]);

  useEffect(() => {
    if(location.pathname === path) {
      setIsActive(true);
    }
  }, [])

  return (
    <div className={`transition-all duration-500 ${buttonStyle.buttonWrapper}`}>
      <Button 
        className={`h-[60px] py-3 border-8 transition-[border] duration-500 bg-white rounded-full ${buttonWidth} ${buttonStyle.button}`}
        onClick={() => path !== undefined && navigate(path)}
      >
        <div className="w-[44px] flex items-center justify-center">
          {icon}
        </div>
        {isContentVisible &&
          <>
            <span className="flex flex-1">
              {label}
            </span>
            {type !== "danger" &&
              <FaChevronRight />
            }
          </>
        }
      </Button>
    </div>
  );
};

export default SidebarButton;