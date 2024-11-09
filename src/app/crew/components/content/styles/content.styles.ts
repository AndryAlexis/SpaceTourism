export const styles = {
    container: "flex flex-col justify-between gap-6 tablet:gap-10 mobile:gap-28",
    section: "grid gap-6 tablet:gap-8 mobile:gap-6",
    role: "text-white text-opacity-70 font-light text-3xl mobile:text-2xl",
    name: "text-white text-7xl tablet:text-6xl mobile:text-5xl",
    bio: "text-white text-lg tablet:text-lg tablet:max-w-xl",
    nav: "tablet:flex tablet:justify-center tablet:mb-10",
    list: "flex gap-10",
    button: (isActive: boolean) => 
      `w-4 h-4 tablet:w-6 tablet:h-6 mobile:w-5 mobile:h-5 rounded-full bg-white ${
        isActive ? 'opacity-100' : 'opacity-25'
      }`
  }; 