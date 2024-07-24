import plane from '../assets/plane.svg';
const HeaderComponent = () => {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

            <div className="font-[Poppins] bg-gradient-to-t from-[#6bc5d3] to-[#3d9fe0] h-screen">
                <header className="bg-white">
                    <nav className='flex items-center w-[92%] bg-[rgb(46,47,47)] mx-auto'>
                        <div>
                            <img className='w-16' src={plane} alt='Plane' />
                        </div>
                        <div>
                            <ul className='flex text-white items-center gap-[4vw]'>
                                <li>
                                    <a className=' hover:text-gray-500' href='#'>Jobs</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-500' href='#'>Add</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-500' href='#'>About</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-500' href='#'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-[#0c410e] text-white px-5 py-2 rounded-full hover:bg-[#5d9b43]' >Sign In</button>
                        </div>
                    </nav>
                </header>
            </div>




        </div >
    )
}

export default HeaderComponent