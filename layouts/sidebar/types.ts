import { ISidebarMenuItem } from '@/types/general';

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (args: boolean) => void;
  isGamePage?: boolean;
  isSuccess: boolean;
  menuItems: ISidebarMenuItem[] | undefined;
}

export interface SidebarHeader {
  [key: string]: { icon: string; title: string; path: string };
}
