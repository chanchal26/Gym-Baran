import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowRight } from 'react-icons/md';

const Banner = () => {
    return (
        <section className='pl-5'>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="font-bold leading-none sm:text-6xl">Healthy in side<br />
                        <span className="text-violet-400">fresh</span> out side
                    </h1>
                    <p className="mt-2 mb-8 text-lg sm:mb-12">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
                        <br className="hidden md:inline lg:hidden" />
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 w-[246] h-14 text-lg font-semibold rounded bg-[#264373] text-white"><span className='pr-5'>Get started</span> <IoIosArrowForward className='inline bg-white w-6 h-6 text-[#264373] rounded-full' /></a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded bg-white"><MdArrowRight className='inline bg-[#264373] rounded-full text-white' /> Learn more</a>
                    </div>
                    <p className="pt-9">Brands:</p>
                    <Image
                        src="/brand.svg"
                        alt="Picture of the author"
                        width={462}
                        height={63}

                    />
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image
                        src="/img1.png"
                        alt="Picture of the author"
                        width={584}
                        height={580}
                        className="pt-12 "
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;