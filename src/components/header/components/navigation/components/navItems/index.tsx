import { INavItemsProps } from './types/navitems.types';
import { getNavItemStyles } from './styles/navItems.styles';
import Link from 'next/link';

/**
 * NavItems component that renders a navigation link item
 * 
 * @param number - The numeric prefix shown before the name (e.g. "01")
 * @param name - The display text for the navigation item
 * @param isActive - Whether this item is currently active/selected
 * @param path - The URL path this item links to
 * @returns A styled list item containing the navigation link
 */
const NavItems = ({
    number,
    name,
    isActive = false,
    path
}: INavItemsProps): JSX.Element => {
    // Get the CSS classes for styling different parts of the nav item
    const {
        baseClasses,
        underlineClasses,
        linkClasses,
        numberClasses,
        nameClasses
    } = getNavItemStyles(isActive);

    return (
        <li className={`${baseClasses} ${underlineClasses}`}>
            <Link className={linkClasses} href={path}>
                <span className={numberClasses}>
                    {number}
                </span>
                <span className={nameClasses}>
                    {name}
                </span>
            </Link>
        </li>
    );
}

export default NavItems;
