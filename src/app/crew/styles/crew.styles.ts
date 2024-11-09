export const crewStyles = {
  container: `
    flex flex-col 
    tablet:min-h-dvh 
    mobile:min-h-dvh 
    min-h-screen 
    items-center 
    bg-cover
    bg-[url('./public/crew/background-crew-desktop.jpg')] 
    tablet:bg-[url('./public/crew/background-crew-tablet.jpg')] 
    mobile:bg-[url('./public/crew/background-crew-mobile.jpg')]     
  `,

  main: `
    my-auto
    mx-auto
    tablet:mb-0
    px-12 
    pb-12
    tablet:pb-0
    mobile:pb-12
    gap-16
    flex flex-col
    max-w-screen-xl
    tablet:text-center 
    tablet:gap-14 
    mobile:gap-14
    w-full
    h-full
  `,

  heading: `
    font-bellefair text-2xl flex gap-4 pt-10    
  `,

  headingNumber: `text-white/25`,

  content: `
    flex gap-20 h-full justify-between tablet:gap-12 tablet:flex-col tablet:items-center tablet:justify-center
  `
}
