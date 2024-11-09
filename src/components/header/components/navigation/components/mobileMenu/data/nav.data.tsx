import { NavItem } from '../interfaces/mobileMenu.interfaces';

/**
 * Navigation items data for the mobile menu
 * Each item contains:
 * - number: Display number for the navigation item
 * - name: Display name of the page
 * - isActive: Whether this is the current active page
 * - path: URL path for the page
 */
export const navItems: NavItem[] = [
    {
        number: '00',
        name: 'Home',
        path: '/'
    },
    {
        number: '01', 
        name: 'Destination',
        path: '/destination'
    },
    {
        number: '02',
        name: 'Crew', 
        path: '/crew'
    }
];