import Image from 'next/image';
import NavItems from './NavItems';
import close from '@/app/public/shared/icon-close.svg';
import { navItems } from './data/nav.data';
import { getNavStyles } from './styles/nav.styles';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps): JSX.Element => {
    const { navListClasses, mobileMenuClasses } = getNavStyles(isOpen);

    return (
        <div className={`${mobileMenuClasses}`}>
            <figure className='flex justify-end mobile:mr-8'>
                <Image
                    alt="close menu"
                    className='hidden mobile:block pt-10 cursor-pointer'
                    height={28}
                    width={28}
                    src={close}
                    onClick={onClose}
                />
            </figure>

            <nav className="w-full mobile:pt-20">
                <ul className={navListClasses}>
                    {navItems.map(({ number, name, isActive }) => (
                        <NavItems
                            key={number}
                            number={number}
                            name={name}
                            isActive={isActive}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu; 