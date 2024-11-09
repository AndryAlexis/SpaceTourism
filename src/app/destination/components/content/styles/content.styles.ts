export const contentStyles = {
    // Main content section container
    section: `
        max-w-lg 
        grid 
        gap-8
    `,

    // Horizontal list of destination navigation items
    destinationList: `
        flex 
        gap-4
        tablet:justify-center
    `,

    // Large title text for selected destination
    destinationTitle: `
        font-bellefair 
        text-9xl
        tablet:text-8xl
        mobile:text-7xl
    `,

    // Container for destination description text
    description: `
        min-h-24
    `,

    // Horizontal line separator
    divider: `
        h-px 
        w-full 
        border-b-2 
        border-white/25 
        my-12
    `,

    // Two column grid for destination info
    infoList: `
        grid 
        grid-cols-2 
        gap-12
        mobile:grid-cols-1
    `,

    // Individual info item container
    infoItem: `
        flex 
        flex-col 
        justify-center
    `,

    // Value text styling for info items
    infoValue: `
        font-bellefair 
        text-2xl
        mobile:text-4xl
    `
}