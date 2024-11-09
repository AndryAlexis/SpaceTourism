import Image from "next/image";
import type { IPicture } from "./interfaces/picture.interfaces";

/**
 * Picture component that displays a destination image.
 * Renders a responsive image within a figure element using Next.js Image component.
 *
 * @param images - Source image for the destination
 * @param title - Title of destination used as alt text
 * @returns JSX.Element - Rendered figure with optimized image
 */
const Picture = ({ images, title }: IPicture): JSX.Element => {
    return (
        <figure 
            className={`
                h-full 
                min-h-[512px] 
                w-10/12 
                tablet:w-4/12
                transition-opacity 
                duration-300
            `}
            aria-label={`Image of ${title}`}
        >
            <Image
                alt={`Photograph of ${title}`}
                height={445}
                width={445}
                src={images}
                className={`
                    w-full 
                    h-full 
                    object-contain
                `}
                priority // Load image immediately as it's above the fold
                quality={90} // Higher quality for space images
            />
        </figure>
    );
};

export default Picture;
