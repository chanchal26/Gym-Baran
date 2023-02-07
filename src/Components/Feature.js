import Image from 'next/image';
import React from 'react';
import { ImArrowRight2 } from 'react-icons/im';

const Feature = () => {
    return (
        <section className='grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center mx-auto w-4/5 h-[496px]'>
            <div>
                <Image
                    src="/img2.png"
                    alt="Picture of the author"
                    width={571}
                    height={496}
                />
            </div>
            <div className='w-4/5 pb-5'>
                <h1 className='text-ellipsis text-[46px]'>Best full body<br /> workout to lose fat</h1>
                <p className='py-10'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                <a href="#" className="bg-[#264373] text-white w-[246px] px-5 py-2 rounded h-[52px]"><span className='pr-5'>Get started</span> <ImArrowRight2 className='inline' /></a>
            </div>
        </section>
    );
};

export default Feature;