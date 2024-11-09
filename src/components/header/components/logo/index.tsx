import logo from '@/app/public/shared/logo.svg';
import Image from 'next/image';
import { logoContainerStyles, logoFigureStyles, logoImageStyles, decorativeLineStyles } from './styles/logo.styles';

/**
 * Logo section component that displays the site logo and a decorative line
 * 
 * Features:
 * - Renders the site logo image on the left side
 * - Shows a white horizontal decorative line extending to the right
 * - Line is hidden on tablet breakpoint
 * - Responsive sizing and spacing
 * 
 * @param className - Optional CSS classes to extend styling
 */
const LogoSection = () : JSX.Element => {
    // Container for logo and line
    return (
        <div className={logoContainerStyles}>
            {/* Logo container */}
            <figure className={logoFigureStyles}>
                <Image
                    src={logo}
                    alt="Space Tourism Logo"
                    className={logoImageStyles}
                    width={34}
                    height={34}
                />
            </figure>

            {/* Decorative horizontal line */}
            <div className={decorativeLineStyles} />
        </div>
    );
};

export default LogoSection;
