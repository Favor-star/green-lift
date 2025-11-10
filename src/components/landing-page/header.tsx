import Logo from '@/assets/logo2.svg';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, } from '@tabler/icons-react';
import { MenuSheet } from './menu-sheet';
import {  useState } from 'react';


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <section className="bg-green-500 text-white  backdrop-blur-md sticky top-0 z-50 py-4 shadow-md">
            <header className="flex max-w-screen-lg mx-auto justify-between items-center px-4">

                <hgroup className='flex items-center'>
                    <img src={Logo} alt="Green Lift Logo" className="h-fit w-15 inline-block mr-2  rounded-xl" />
                    <h1 className='font-medium text-base leading-tight'>  Green Lift Innovation</h1>
                </hgroup>
                <ul className="space-x-4 items-center hidden md:flex">
                    <li>
                        <a href="#about-us" className="hover:underline hover:underline-offset-2 text-sm">About us</a>
                    </li>
                    <li>
                        <a href="#services" className="hover:underline hover:underline-offset-2 text-sm">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact-us" className="hover:underline hover:underline-offset-2 text-sm">
                            Contact us
                        </a>
                    </li>
                </ul>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <a href="#" className="hover:underline hover:underline-offset-2 text-sm">
                            <IconBrandFacebook strokeWidth={1.3} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:underline-offset-2 text-sm">
                            <IconBrandLinkedin strokeWidth={1.3} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:underline-offset-2 text-sm">
                            <IconBrandInstagram strokeWidth={1.3} />
                        </a>
                    </li>
                </ul>
                <div className="md:hidden">
                    <button aria-label="Open Menu" className='p-2 rounded-full border border-white hover:bg-white hover:bg-opacity-20 hover:text-green-500 transition'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        </button>
                         <MenuSheet setIsModalOpen={setIsMenuOpen} isModalOpen={isMenuOpen}/>
                        
                </div>
            </header>
        </section>
    )
}
