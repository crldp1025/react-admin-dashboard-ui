import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IDashboardStateProps {
  isSidebarExpanded: boolean;
}

export interface IDashboardContextProps {
  dashboard: IDashboardStateProps;
  setDashboard: Dispatch<SetStateAction<IDashboardStateProps>>;
}

export const defaultState = {
  dashboard: {
    isSidebarExpanded: true
  },
  setDashboard: (dashboard: IDashboardStateProps) => {}
} as IDashboardContextProps;

export const DashboardContext = createContext(defaultState);

interface IDashboardProviderProps {
  children?: ReactNode;
}

const DashboardProvider = ({children}: IDashboardProviderProps) => {
  const [dashboard, setDashboard] = useState<IDashboardStateProps>(defaultState.dashboard);

  return (
    <DashboardContext.Provider value={{dashboard, setDashboard}}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;