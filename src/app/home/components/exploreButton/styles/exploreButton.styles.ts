/**
 * Returns the base classes for the ExploreButton component styling.
 * Provides responsive, interactive button styling with hover effects.
 * 
 * @returns {Object} Object containing CSS classes for container and button
 * @property {string} containerClasses - Classes for outer hover effect container
 * @property {string} linkClasses - Classes for inner button element
 */
export const getExploreButtonStyles = () => {
    // Base dimensions that will be used in multiple places
    const desktopSize = {
        container: `
            h-80 
            w-80 
            min-h-80 
            min-w-80
        `,
        button: `
            h-60 
            w-60 
            min-h-60 
            min-w-60
        `
    };

    const mobileSize = {
        container: `
            mobile:h-60 
            mobile:w-60 
            mobile:min-h-60 
            mobile:min-w-60
        `,
        button: `
            mobile:h-40 
            mobile:w-40 
            mobile:min-h-40 
            mobile:min-w-40
        `
    };

    // Common styles that apply to both container and button
    const commonStyles = `
        rounded-full 
        transition-colors 
        duration-500
    `;

    // Classes for the outer container that provides hover effect background
    const containerClasses = `
        relative flex items-center justify-center 
        ${desktopSize.container} 
        ${mobileSize.container} 
        has-[a:hover]:bg-slate-300/70 
        ${commonStyles}
    `;

    // Classes for the inner button element
    const linkClasses = `
        grid place-items-center 
        ${desktopSize.button} 
        ${mobileSize.button} 
        bg-slate-300 
        text-2xl 
        text-black 
        uppercase 
        cursor-pointer 
        hover:text-opacity-60 
        ${commonStyles}
    `;

    return {
        containerClasses,
        linkClasses
    };
};
