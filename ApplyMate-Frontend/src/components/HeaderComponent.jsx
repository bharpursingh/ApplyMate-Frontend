import plane from '../assets/plane.svg';
import { CloseIcon, MenuIcon } from '@iconicicons/react'
import { useState } from 'react';

const HeaderComponent = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            {/* FONTS */}

            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

            <div className="font-[Poppins]">
                <header className="bg-white">
                    <nav className='flex justify-between items-center w-[92%] bg-[#8d8b8b] mx-auto'>
                        <div>
                            <img className='w-16' src={plane} alt='Plane' />
                        </div>

                        <div className={`flex justify-between items-center nav-links w-[92%]  absolute md:relative md:min-h-fit bg-[#8d8b8b] min-h-[30vh] ${menuOpen ? 'top-[8vh]' : 'top-[-100%]'} md:w-[80%] md:top-0 md:flex md:flex-row md:gap-6 gap-6 md:bg-transparent md:items-center md:px-1 px-5 transition-all duration-300 ease-in-out mx-auto`}>
                            <ul className='flex md:flex-row flex-col text-white items-center md:gap-[4vw] gap-6'>
                                <li>
                                    <a className=' hover:text-black' href='#'>Jobs</a>
                                </li>
                                <li>
                                    <a className='hover:text-black' href='#'>Add</a>
                                </li>
                                <li>
                                    <a className='hover:text-black' href='#'>About</a>
                                </li>
                                <li>
                                    <a className='hover:text-black' href='#'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-3 px-1'>
                            <button className='bg-[#0c410e] text-white px-5 py-2 rounded-full hover:bg-[#5d9b43]'>Sign In</button>

                            {menuOpen ? (
                                <CloseIcon onClick={onToggleMenu} className='text-white text-3xl cursor-pointer md:hidden' />
                            ) : (
                                <MenuIcon onClick={onToggleMenu} className='text-white text-3xl cursor-pointer md:hidden' />
                            )}
                        </div>
                    </nav>
                </header>
            </div>
        </div >
    )
}

export default HeaderComponent