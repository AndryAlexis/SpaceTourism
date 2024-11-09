
export const tabItemStyles = (active: boolean) => {
    return {
        container: `
            cursor-pointer 
            py-4
            hover:border-b-4 
            border-b-4 
            border-transparent 
            transition-colors 
            duration-300
            ${active ? 'border-white hover:border-white' : 'border-transparent hover:border-white/50'} 
        `
    }
}
