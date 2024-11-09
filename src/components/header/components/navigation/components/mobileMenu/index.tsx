'use client';

import Image from 'next/image';
import NavItems from '../navItems';
import close from '@/app/public/shared/icon-close.svg';
import { navItems } from './data/nav.data';
import { getNavStyles } from '../../styles/nav.styles';
import { MobileMenuProps } from './interfaces/mobileMenu.interfaces';
import { setActiveNavItems } from './utils/helper';

/**
 * Mobile menu component that displays navigation items in a slide-out menu
 * Features:
 * - Slide in/out animation controlled by isOpen prop
 * - Close button in top right corner
 * - Full navigation menu with active page highlighting
 * - Responsive styling for mobile devices
 */
const MobileMenu = ({ activePage, isOpen, onClose }: MobileMenuProps): JSX.Element => {
    // Get dynamic classes based on menu open state
    const { navListClasses, mobileMenuClasses } = getNavStyles(isOpen);

    // Create copy of nav items with active state set based on current page
    const navItemsCopy = setActiveNavItems(navItems, activePage);

    return (
        <div className={`${mobileMenuClasses}`}>
            {/* Close button container */}
            <figure className='flex justify-end mobile:mr-8'>
                <Image
                    alt="close menu"
                    className='hidden mobile:block pt-10 cursor-pointer'
                    height={28}
                    width={28}
                    src={close}
                    onClick={onClose}
                />
            </figure>

            {/* Navigation menu */}
            <nav className="w-full mobile:pt-20">
                <ul className={navListClasses}>
                    {/* Map through nav items and render each one */}
                    {navItemsCopy.map(({ number, name, isActive, path }) => (
                        <NavItems
                            key={number}
                            number={number}
                            name={name}
                            isActive={isActive}
                            path={path}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;