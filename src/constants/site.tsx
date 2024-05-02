import { ISidebarButtonProps } from "../interfaces/Site";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { PiSignOutLight } from "react-icons/pi";

export const SidebarButtons: ISidebarButtonProps[] = [
  {
    icon: <MdDashboard className="text-2xl" />,
    label: 'Dashboard',
    path: '/'
  },
  {
    icon: <HiUsers className="text-2xl" />,
    label: 'Users',
    path: '/users'
  },
  {
    icon: <IoMdSettings className="text-2xl" />,
    label: 'Settings',
    path: '/settings'
  },
  {
    icon: <PiSignOutLight className="text-2xl" />,
    label: 'Sign Out',
    type: 'danger'
  }
]