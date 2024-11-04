import logo from '@/app/public/shared/logo.svg';
import Image from 'next/image';

interface LogoSectionProps {
  className?: string;
}

/**
 * Logo section component that displays:
 * - The site logo on the left side
 * - A decorative white horizontal line extending to the right (hidden on tablet)
 */
const LogoSection = ({ className = '' }: LogoSectionProps): JSX.Element => {
    return (
        <div 
            className={`
                flex items-center justify-center gap-10 
                w-1/2 tablet:w-fit
                ${className}
            `}
        >
            <figure className="
                grid place-content-center
                min-w-28 w-30 
                pl-10 tablet:px-4
                mobile:min-w-fit mobile:pl-8
            ">
                <Image 
                    src={logo} 
                    alt="Space Tourism Logo" 
                    className="h-[inherit] w-[inherit]"
                    width={34}
                    height={34}
                />
            </figure>

            <div className="
                bg-white opacity-60
                h-[1px] w-full
                tablet:hidden
            " />
        </div>
    );
};

export default LogoSection;
