import { NavItem } from "../interfaces/mobileMenu.interfaces";

const setActiveNavItems = (navItemsData: NavItem[], activePage: string) => {
    return navItemsData.map(item => {
        return {
            ...item,
            isActive: item.path === activePage
        }
    });
}

export { setActiveNavItems };