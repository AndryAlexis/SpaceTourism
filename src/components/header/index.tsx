// Required imports for the header components
import React from 'react';
import LogoSection from './components/logo';
import NavigationSection from './components/navigation';

/**
 * Header component that combines LogoSection and NavigationSection
 * Uses a grid layout with two columns
 */
const Header = ({ activePage }: { activePage: string }): JSX.Element => <>
    <header className="
        flex
        items-center 
        justify-center
        pt-8
        mobile:justify-between
        mobile:relative
        w-full
    ">
        <LogoSection />
        <NavigationSection activePage={activePage} />
    </header>
</>

export default Header;