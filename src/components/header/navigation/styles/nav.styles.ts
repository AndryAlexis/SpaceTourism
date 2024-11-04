export const getNavStyles = (isOpen: boolean) => ({
    containerClasses: `
        relative flex flex-1 items-center justify-between
        mobile:flex-initial mobile:px-8 mobile:static
    `,

    decorativeLineClasses: `
        absolute left-0 top-1/2 h-[1px] w-8
        -translate-y-1/2 bg-white opacity-60
        tablet:hidden
    `,

    hamburgerClasses: `
        hidden h-8 w-8 min-w-8 cursor-pointer
        mobile:block
    `,

    navigationClasses: `
        relative flex-1 bg-white/10 backdrop-blur-lg
        pl-16 pr-10 tablet:px-5
        mobile:backdrop-blur-none mobile:bg-transparent
        mobile:fixed mobile:right-0 mobile:top-0
        mobile:h-dvh mobile:w-3/4 mobile:z-50
        mobile:px-0 mobile:overflow-hidden
        ${isOpen ? 'mobile:pointer-events-auto' : 'mobile:pointer-events-none'}
    `,

    navListClasses: `
        flex h-[8.5rem] justify-end gap-8 [&>li]:h-full
        mobile:flex-col mobile:h-full
    `,

    mobileMenuClasses: `
        mobile:bg-white/10 mobile:backdrop-blur-lg mobile:h-full
        mobile:transition-transform mobile:duration-500
        mobile:ease-in-out mobile:will-change-transform
        ${isOpen ? 'mobile:translate-x-0' : 'mobile:translate-x-full'}
    `
}); 