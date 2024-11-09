import { tabItemStyles } from "../styles/tabItems.styles";
import type { ITabItem } from "./interfaces/tabItems.interfaces";

/**
 * TabItem component that renders an interactive tab for destination selection.
 * 
 * @param children - Content to be displayed within the tab
 * @param onClick - Click handler for tab selection
 * @param active - Whether this tab is currently selected
 * @param ariaSelected - ARIA selected state for accessibility
 * @param role - ARIA role for accessibility
 * @returns JSX.Element - Rendered tab list item
 */
const TabItem = ({ 
    children, 
    onClick, 
    active, 
    ariaSelected, 
    role 
}: ITabItem): JSX.Element => {
    return (
        <li 
            className={tabItemStyles(active).container}
            onClick={onClick}
            aria-selected={ariaSelected}
            role={role}
            tabIndex={0}
        >
            {children}
        </li>
    );
};

export default TabItem;