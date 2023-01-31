export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (args: boolean) => void;
  isGamePage?: boolean;
  isSuccess: boolean;
  menuItems: SidebarMenuItem[] | undefined;
}

export interface SidebarHeader {
  [key: string]: { icon: string; title: string; path: string };
}

export interface SidebarMenuItem {
  items: {
    title: string;
    image?: string;
    duration?: string;
    icon?: string;
    mint_start_date?: string;
    mint_end_date?: string;
    start_time?: string;
    end_time?: string;
  }[];
  header: string;
}
