'use client';

// Required imports for the header components
import React from 'react';
import LogoSection from './Logo';
import NavigationSection from './navigation/NavSection';

/**
 * Header component that combines LogoSection and NavigationSection
 * Uses a grid layout with two columns
 */
const Header = (): JSX.Element => <>
    <header className="grid grid-cols-2 place-content-center items-center pt-8">
        <LogoSection />
        <NavigationSection />
    </header>
</>


export default Header;