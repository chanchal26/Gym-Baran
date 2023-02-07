import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Hero = () => {
    return (
        <section>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 text-white w-4/5 h-72 bg-gradient-to-r from-regal-deep-blue to-regal-blue rounded-[30px] mx-auto my-10 justify-items-center' >
                <div className='flex items-center gap-3'>
                    <div className="bg-regal-blue rounded-2xl">
                        <Image
                            src="/men1.svg"
                            alt="Picture of the author"
                            width={38}
                            height={50}
                            className="m-5"
                        />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Get that 11 line<br /> in 30 days</h3>
                        <p>Learn more <IoIosArrowRoundForward className='inline' /></p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className="bg-regal-blue rounded-2xl">
                        <Image
                            src="/men2.svg"
                            alt="Picture of the author"
                            width={38}
                            height={50}
                            className="m-5"
                        />
                    </div>
                    <div>
                        <h3 className='font-semibold'>14 Days<br /> sherd challenge</h3>
                        <p>Learn more <IoIosArrowRoundForward className='inline' /></p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className="bg-regal-blue rounded-2xl">
                        <Image
                            src="/men3.svg"
                            alt="Picture of the author"
                            width={38}
                            height={50}
                            className="m-5"
                        />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Get flat belly<br /> in 30 days</h3>
                        <p>Learn more <IoIosArrowRoundForward className='inline text-black' /></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;