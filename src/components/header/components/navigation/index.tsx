'use client';

import Image from 'next/image';
import { useState } from 'react';
import hamburger from '@/app/public/shared/icon-hamburger.svg';
import MobileMenu from './components/mobileMenu';
import { getNavStyles } from './styles/nav.styles';

const NavigationSection = ({ activePage }: { activePage: string }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const { containerClasses, navigationClasses, decorativeLineClasses, hamburgerClasses } = getNavStyles(isOpen);

    return (
        <div className={containerClasses}>
            <div className={navigationClasses}>
                <div className={decorativeLineClasses} />
                <MobileMenu activePage={activePage} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>

            <Image
                alt="open menu"
                className={hamburgerClasses}
                height={21}
                width={24}
                src={hamburger}
                onClick={() => setIsOpen(true)}
            />
        </div>
    );
};

export default NavigationSection;
