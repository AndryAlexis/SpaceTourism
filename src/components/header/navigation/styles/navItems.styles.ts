export const getNavItemStyles = (isActive: boolean) => ({
    baseClasses: `
        flex items-center justify-center
        mobile:justify-start
        mobile:pl-8
        relative gap-2
        hover:cursor-pointer
    `,

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
    `
}); 