import React from 'react';

const Content = () => {
    return (
        <div>
            <section className='grid lg:grid-cols-2 gap-5 my-8 sm:grid-cols-1 justify-items-center mx-auto'>
                <div className='text-4xl text-ellipsis'>
                    <h1>Healthy in side<br />fresh out side</h1>
                </div>
                <div className='w-4/5 h-[112px] text-base'>
                    <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
                </div>
            </section>
        </div>
    );
};

export default Content;