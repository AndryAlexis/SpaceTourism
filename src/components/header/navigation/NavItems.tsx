import { INavItemsProps } from './types/navitems.types';
import { getNavItemStyles } from './styles/navItems.styles';

/**
 * NavItems component - Renders a single navigation item with hover and active states
 * Displays a number prefix followed by the page name
 * Shows an underline animation on hover and when active
 */
const NavItems = ({number, name, isActive = false} : INavItemsProps) : JSX.Element => {
    const { baseClasses, underlineClasses } = getNavItemStyles(isActive);

    return (
        <li className={`${baseClasses} ${underlineClasses}`}>
            <span className="font-bold">
                {number}
            </span>
            <span className="uppercase">
                {name}
            </span>
        </li>
    );
}

export default NavItems;
