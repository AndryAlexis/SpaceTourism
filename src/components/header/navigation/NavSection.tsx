// Import the NavItems component for rendering individual navigation links
import NavItems from './NavItems';

/**
 * Navigation section component containing the main navigation links
 * Displays a horizontal navigation bar with numbered menu items
 * Each item shows a number prefix (00-03) followed by the page name
 */
const NavigationSection = ( {className}: {className?: string} ): JSX.Element => {
    // Define navigation items with their corresponding numbers and names
    const navItems = [
        { number: '00', name: 'Home', isActive: true },
        { number: '01', name: 'Destination' },
        { number: '02', name: 'Crew' },
        { number: '03', name: 'Technology' },
    ];

    return (
        <div className='relative backdrop-blur-lg bg-white/10 pr-10 pl-16 flex-1 tablet:px-6'>
            {/* Decorative white line element */}
            <div className="bg-white h-[1px] w-8 opacity-60 tablet:hidden absolute left-0 top-1/2 -translate-y-1/2" />
            {/* Main navigation container with flex layout and spacing */}
            <nav className={`items-center justify-between w-full`}>
                {/* Navigation list with custom styling for list items */}
                <ul className="flex justify-end gap-8 h-[8.5rem] [&>li]:h-full">
                    {/* Map through navigation items to create individual nav links */}
                    {navItems.map(({ number, name, isActive }) => (
                        <NavItems 
                            key={number} // Use number as unique key for React list rendering
                            number={number} 
                            name={name} 
                            isActive={isActive}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavigationSection;
