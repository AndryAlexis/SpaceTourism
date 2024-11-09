export const pictureClasses = {
  figure: `
    relative 
    h-full
    min-h-[512px]
    tablet:min-h-max
    tablet:w-2/4
    flex
    justify-center 
    items-center
    tablet:items-end
    w-7/12
    mobile:w-full
  `,
  image: `
    w-full
    h-full 
    object-contain
    [mask-image:linear-gradient(to_bottom,black_80%,transparent)]
    mobile:[mask-image:linear-gradient(to_bottom,black_80%,transparent)]
    tablet:[mask-image:none]
  `
};
