import React from 'react';
import Image from 'next/image';

const Screen2 = () => {
    return <div className="h-screen relative bg-light scroller-div">
        <div className="-mt-4">
            <div className='max-w-5xl h-100 flex items-center h-auto lg:h-auto flex-wrap mx-auto lg:my-0'>
                <div className="flex mt-10 items-center text-center justify-center mx-auto gap-4">
                    <img src="/work.svg" width="100" height="100" />
                    <h1 className="text-dark text-4xl py-5">Work Experience</h1>
                </div>
                <ol className="relative px-10 pb-0 pt-10 overflow-hidden">
                    <div
                        className='md:border-2-2  py-12 -ml-4 md:absolute border-opacity-100 md:border-blue-900 h-full border'
                    ></div>
                    <li className="pb-10 pl-6 align-center">
                        <span className="flex absolute left-3 justify-center mt-12 items-center w-6 h-6 bg-blue-900 ring-opacity-80 rounded-full ring-8 ring-sky-200 opacity-100">
                        </span>
                        <div className="items-center p-4 text-dark rounded-lg  border-2 border-sky-700 shadow-sm ">
                            <span className="text-2xl text-dark ">Full Stack Developer</span>
                            <br />
                            <span className="text-xl text-dark ">Techdome Solutions Pvt Limited</span>
                            <br />
                            <i className=''>12/2021 - Present</i>
                            <br />
                            <br />
                            <span className="text-lg text-dark ">Build and integrate websites and applications. Write well designed and efficient code to solve simple and complex problems.</span>

                        </div>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="flex absolute mt-12 left-3 text-dark  font-extrabold text-2xl justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-dark ring-opacity-100 ">
                            ✓  {/* <img className="rounded-full shadow-lg" src="/kavy1.jpg" alt="" /> */}
                        </span>
                        <div className="items-center p-4 text-dark rounded-lg  border-2 border-sky-700 shadow-sm ">
                            <span className="text-2xl text-dark ">Front End Developer Intern</span>
                            <br />
                            <span className="text-xl text-dark ">Techdome Solutions Pvt Limited</span>
                            <br />
                            <i className=''>07/2021 - 12/2021</i>
                            <br />
                            <br />
                            <span className="text-lg text-dark ">Build and integrate websites and applications. Collaborate with the team and solve problems.</span>

                        </div>
                    </li>
                    <li className="ml-6">
                        <span className="flex absolute mt-12 left-3 text-dark  font-extrabold text-2xl justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-dark ring-opacity-100">
                            ✓   {/* <img className="rounded-full shadow-lg" src="/kavy1.jpg" alt="Jese Leos image" /> */}
                        </span>
                        <div className="items-center p-4 text-dark rounded-lg  border-2 border-sky-700 shadow-sm ">
                            <span className="text-2xl text-dark ">Web Developer Intern - Project Head</span>
                            <br />
                            <span className="text-xl text-dark ">Technocolabs Solutions</span>
                            <br />
                            <i className=''>06/2021 - 07/2021</i>
                            <br />
                            <br />
                            <span className="text-lg text-dark ">Built a B2B Website from scratch using NodeJS, MongoDB Atlas and EJS template.</span>

                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div >
};

export default Screen2;
