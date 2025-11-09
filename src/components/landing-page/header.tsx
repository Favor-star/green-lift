import Logo from '@/assets/logo2.svg';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, } from '@tabler/icons-react';

export const Header = () => {
    return (
        <section className="bg-green-500 text-white  backdrop-blur-md sticky top-0 z-50 py-4 shadow-md">
            <header className="flex max-w-screen-lg mx-auto justify-between items-center px-4">

                <div className='flex items-center'>
                    <img src={Logo} alt="Green Lift Logo" className="h-fit w-15 inline-block mr-2  rounded-xl" />
                  <h1 className='font-medium text-base leading-tight'>  Green Lift Innovation</h1>
                </div>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <a href="#" className="hover:underline"><IconBrandFacebook strokeWidth={1.3} /></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            <IconBrandLinkedin strokeWidth={1.3} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            <IconBrandInstagram strokeWidth={1.3} />
                        </a>
                    </li>
                </ul>
            </header>
        </section>
    )
}
