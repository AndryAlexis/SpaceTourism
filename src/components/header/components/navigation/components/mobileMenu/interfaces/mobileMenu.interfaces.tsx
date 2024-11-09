interface NavItem {
    number: string;
    name: string;
    isActive?: boolean;
    path: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    activePage: string;
}

export type { NavItem, MobileMenuProps };
