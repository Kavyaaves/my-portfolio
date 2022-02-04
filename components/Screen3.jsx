import React from 'react';
import Image from "next/Image"
const Screen3 = () => {
    return <div className="h-screen relative scroller-div">
        <div className='max-w-6xl h-100  items-center h-auto lg:h-auto flex-wrap mx-auto lg:my-0'>
            <div className="flex py-5 items-center text-center justify-center mx-auto gap-4">
                {/* <img src='/kavy1idth="100" height="100" /> */}
                <h1 className="text-light text-4xl py-5">Projects</h1>
            </div>
            <br />
            <div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
                <a rel="noreferrer"
                    target='_blank'
                    href='https://www.psaalgae.org/'
                    className='p-5 flex items-center justify-center'>
                    <Image alt="Babu" className="" src='/babu-1.png' width={670} height={440} />
                </a>
                <a rel="noreferrer"
                    target='_blank'
                    href='https://www.algaebase.org/'
                    className='p-5 flex items-center justify-center'>
                    <Image alt="AlgaeBase" className="" src='/gallerygram-1.png' width={670} height={440} />
                </a>
                <a rel="noreferrer"
                    href='http://www.digicodes.info/'
                    target='_blank'
                    className='p-5 justify-center flex items-center'>
                    <Image alt="Digicodes" className="" src='/todo-1.png' width={370} height={240} />
                </a>
            </div>

            <div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
                <a rel="noreferrer"
                    target='_blank'
                    href='https://www.psaalgae.org/'
                    className='p-5 flex items-center justify-center'>
                    <Image alt="PSAalgae" className=" " src='/covid-traker-1.png' width={370} height={240} />
                </a>
                <a rel="noreferrer"
                    target='_blank'
                    href='https://www.algaebase.org/'
                    className='p-5 flex items-center justify-center'>
                    <Image alt="AlgaeBase" className="" src='/todo-2.png' width={370} height={240} />
                </a>
                <a rel="noreferrer"
                    href='http://www.digicodes.info/'
                    target='_blank'
                    className='p-5 justify-center flex items-center'>
                    <Image alt="Digicodes" className="" src='/kavy1.png' width={370} height={240} />
                </a>
            </div>


        </div>
    </div>;
};

export default Screen3;
