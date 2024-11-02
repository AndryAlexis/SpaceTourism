// Import the logo image from the public directory
import logo from '@/app/public/shared/logo.svg';
// Import Next.js Image component for optimized image loading
import Image from 'next/image';

/**
 * Logo section component containing the site logo and decorative line
 * Displays the logo on the left side with a white horizontal line extending to the right
 * Used in the main header of the site
 */
const LogoSection = (): JSX.Element => {
    return (
        // Container with flex layout to center items and create spacing
        <div className="flex place-content-center items-center gap-12 w-full">
            {/* Logo container with padding and fixed width */}
            <figure className="pl-12 w-24 min-w-24">
                <Image 
                    src={logo} 
                    alt="logo" 
                    className="w-auto h-auto"
                    // Using Next Image for automatic optimization and responsive sizing
                />
            </figure>
            {/* Decorative white line that extends beyond container width */}
            <div className="bg-white h-[1px] w-full opacity-60" />
        </div>
    );
};

export default LogoSection;
