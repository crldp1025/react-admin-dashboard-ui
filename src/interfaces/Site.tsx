import { ReactNode } from "react";

type SidebarButtonType = 'default' | 'danger';

export interface ISidebarButtonProps {
  icon: ReactNode;
  label: string;
  path?: string;
  type?: SidebarButtonType;
}