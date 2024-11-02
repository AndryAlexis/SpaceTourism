// Props interface for NavItems component
interface INavItemsProps {
    number: string;    // Navigation item number (e.g. "00", "01")
    name: string;      // Navigation item name
    isActive?: boolean;// Whether this item is currently active
}

/**
 * NavItems component - Renders a single navigation item with hover and active states
 * Displays a number prefix followed by the page name
 * Shows an underline animation on hover and when active
 */
const NavItems = ({number, name, isActive = false} : INavItemsProps) : JSX.Element => {
    // Base classes for the list item
    const baseClasses = `
        flex items-center justify-center
        relative gap-2
        hover:cursor-pointer
    `;

    // Classes for the animated underline effect
    const underlineClasses = `
        after:absolute after:bottom-0
        after:content-[''] after:h-1
        after:left-0 after:w-full
        after:transition-all after:duration-300
        ${isActive ? 'after:bg-white after:opacity-100' : 'after:bg-transparent after:opacity-60'}
        hover:after:bg-white
    `;

    return <>
        <li className={`${baseClasses} ${underlineClasses}`}>
            <span className="font-bold">
                {number}
            </span>
            <span className="uppercase">
                {name}
            </span>
        </li>
    </>
}

export default NavItems;
