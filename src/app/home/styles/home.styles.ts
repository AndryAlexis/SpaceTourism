/**
 * Returns the styling classes for the Home page components.
 * Provides responsive styling for layout, typography and backgrounds.
 * 
 * @returns {Object} Object containing CSS class strings for different page sections
 * @property {string} containerClasses - Classes for main page container
 * @property {string} mainContentClasses - Classes for main content wrapper
 * @property {string} welcomeSectionClasses - Classes for welcome text section
 * @property {string} subheadingClasses - Classes for subheading text
 * @property {string} headingClasses - Classes for main heading
 * @property {string} descriptionClasses - Classes for description paragraph
 */
export const getHomeStyles = () => {
    // Base layout styles used in multiple places
    const flexColumn = 'flex flex-col';
    const centerContent = 'items-center justify-center';
    
    // Responsive height utilities
    const heightClasses = `
        min-h-screen
        tablet:min-h-dvh 
        mobile:min-h-dvh
    `;

    // Background image paths for different screen sizes
    const backgroundClasses = `
        bg-[url('./public/home/background-home-desktop.jpg')] 
        tablet:bg-[url('./public/home/background-home-tablet.jpg')] 
        mobile:bg-[url('./public/home/background-home-mobile.jpg')]
        bg-cover
    `;

    // Container classes for the main page wrapper
    const mainClasses = `
        ${flexColumn}
        ${centerContent} 
        ${heightClasses}
        ${backgroundClasses}
    `;

    // Classes for the main content section
    const articleClasses = `
        my-auto 
        py-12 
        flex 
        gap-24 
        ${centerContent}
        max-w-screen-2xl
        tablet:text-center 
        tablet:flex-col 
        tablet:gap-14 
        mobile:gap-14
    `;

    // Classes for the welcome content section with consistent spacing
    const welcomeSectionClasses = `
        ${flexColumn} 
        gap-6 
        mobile:px-4
    `;

    // Typography classes with consistent ordering and responsive sizes
    const subheadingClasses = `
        order-1 
        text-xl 
        tracking-wider 
        uppercase 
        mobile:text-lg
    `;
    const headingClasses = `
        order-2 
        text-9xl 
        uppercase 
        mobile:text-8xl
    `;
    const descriptionClasses = `
        order-3 
        leading-loose 
        max-w-prose 
        mobile:text-sm
    `;

    return {
        mainClasses,
        articleClasses,
        welcomeSectionClasses,
        subheadingClasses,
        headingClasses,
        descriptionClasses
    };
};
