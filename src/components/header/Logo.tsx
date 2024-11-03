// Import the logo image from the public directory
import logo from '@/app/public/shared/logo.svg';
// Import Next.js Image component for optimized image loading
import Image from 'next/image';

/**
 * Logo section component containing the site logo and decorative line
 * Displays the logo on the left side with a white horizontal line extending to the right
 * Used in the main header of the site
 */
const LogoSection = ( {className = ''}: {className?: string} ): JSX.Element => {
    return (
        // Container with flex layout to center items and create spacing
        <div className={`flex justify-center items-center gap-10 w-full tablet:w-fit ${className}`}>
            {/* Logo container with padding and fixed width */}
            <figure className="grid place-content-center pl-10 w-30 min-w-28 tablet:px-4">
                <Image 
                    src={logo} 
                    alt="logo" 
                    className="w-[inherit] h-[inherit]"
                    // Using Next Image for automatic optimization and responsive sizing
                />
            </figure>
            {/* Decorative white line that extends beyond container width */}
            <div className="bg-white h-[1px] w-full opacity-60 tablet:hidden" />
        </div>
    );
};

export default LogoSection;
