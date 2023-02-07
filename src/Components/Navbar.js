import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';


function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='pt-5'>
            <nav className="w-full top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h2 className=" text-[#6765F0] font-bold "><span className='bg-[#6765F0] rounded-md text-white px-1 pb-1'>Gym</span> baran</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <GrClose focusable />
                                    ) : (
                                        <GiHamburgerMenu />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-6 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-base  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-6 text-base  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                        Program
                                    </Link>
                                </li>
                                <li className="pb-6 text-base  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="pb-6 text-base  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="pb-6 text-base  py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-purple-600 md:hover:bg-transparent">
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)} className="bg-[#264373] rounded-md w-28 py-1 px-3 text-white">
                                        Log in
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;