/**
 * Styles for the Picture component extracted from index.tsx
 * Organized into a reusable object for maintainability
 */
export const pictureStyles = {
    figure: `
        h-full 
        min-h-[512px] 
        tablet:h-auto
        tablet:min-h-0
        w-10/12 
        tablet:w-4/12
        transition-opacity 
        duration-300
    `,
    image: `
        w-full 
        h-full 
        object-contain
    `
} as const;
