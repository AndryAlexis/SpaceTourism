/**
 * Returns an object containing Tailwind CSS classes for styling navigation items
 * @param isActive - Boolean indicating if this navigation item is currently selected
 * @returns Object containing class strings for different parts of the nav item
 */
export const getNavItemStyles = (isActive: boolean) => ({
    // Base container styles - handles layout and spacing
    baseClasses: `
        flex items-center justify-center
        mobile:justify-start
        mobile:pl-8
        relative gap-2
        hover:cursor-pointer
    `,

    // Underline indicator styles - shows active state and hover effects
    // Uses pseudo-element (::after) to create an animated indicator line
    underlineClasses: `
        after:absolute 
        after:bottom-0
        after:content-[''] 
        after:h-1
        after:left-0 
        after:w-full
        after:transition-colors
        after:duration-300
        ${isActive ? 'after:bg-white after:opacity-100' : 'after:bg-transparent after:opacity-60'}
        hover:after:bg-white
        mobile:after:w-[6px]
        mobile:after:left-[calc(100%-6px)]
        mobile:after:h-full
    `,

    // Link container styles
    linkClasses: 'h-full flex gap-2 justify-center items-center',
    
    // Number prefix styles (e.g. "01")
    numberClasses: 'font-bold',
    
    // Navigation text styles
    nameClasses: 'uppercase'
}); 