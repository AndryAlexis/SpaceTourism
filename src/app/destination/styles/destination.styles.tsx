export const destinationStyles = {
  // Main container styles
  // - Full height container with responsive background images
  // - Flexbox layout for vertical content alignment
  container: `
    min-h-screen
    flex 
    flex-col 
    items-center 
    bg-cover
    bg-[url('./public/destination/background-destination-desktop.jpg')] 
    tablet:min-h-dvh 
    tablet:bg-[url('./public/destination/background-destination-tablet.jpg')] 
    mobile:min-h-dvh 
    mobile:bg-[url('./public/destination/background-destination-mobile.jpg')]
  `,

  // Main content wrapper styles
  // - Sets max width and padding
  // - Responsive gap adjustments for tablet/mobile
  main: `
    w-full
    h-full
    max-w-screen-xl
    flex 
    flex-col
    gap-16
    mx-auto
    my-auto
    px-12 
    pb-12
    tablet:text-center 
    tablet:gap-14 
    mobile:gap-14
  `,

  // Page heading styles
  // - Uses Bellefair font
  // - Horizontal layout with gap between number and text
  heading: `
    font-bellefair 
    text-2xl 
    tablet:text-xl
    flex 
    gap-4 
    pt-10
  `,

  // Heading number styles
  // - Semi-transparent white text for visual hierarchy
  headingNumber: `
    text-white/25
  `,

  // Article grid layout
  // - 2 column desktop layout
  // - Single column responsive layout for tablet/mobile
  // - Centered content alignment
  article: `
    grid 
    grid-cols-2 
    gap-24 
    h-full 
    justify-center 
    items-center 
    tablet:grid-cols-1 
    tablet:gap-12 
    tablet:place-items-center
  `,
};
