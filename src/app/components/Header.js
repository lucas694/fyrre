"use client";
import Image from "next/image";
import Link from "next/link";
import { RxDividerHorizontal } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


const Header = () => {
    const [visible, setVisible] = useState(false);
    return(
        <div className="md:relative sticky top-0 z-30 bg-white flex flex-col px-6 lg:px-10 xl:px-20 2xl:px-44" >
            <div className="w-full flex flex-row items-center justify-between pb-6 pt-12">
                <Link href="/">
                    <Image 
                        src={"assets/header-logo.svg"} 
                        alt="header" 
                        width={210} 
                        height={19}
                        className="w-auto h-auto"
                    />
                </Link>
                {/*Navbar desktop*/}
                <nav className="hidden md:flex ">
                    <ul className="flex items-center justify-center space-x-4 lg:space-x-6">
                        <li>
                            <Link href="/magazine" className="text-xl">Magazine</Link>
                        </li>
                        <li>
                            <Link href="/podcast" className="text-xl">Podcast</Link>
                        </li>
                        <li>
                            <Link href="/authors" className="text-xl">Authors</Link>
                        </li>
                        <li>
                            <RxDividerHorizontal />
                        </li>
                        <li>
                            <ul className='flex flex-row items-center justify-center space-x-4'>
                                <li>
                                    <Link href="/" target="blank_"><FaInstagram className="text-lg"/></Link>
                                </li>
                                <li>
                                    <Link href="/" target="blank_"><FaTwitter className="text-lg"/></Link>
                                </li>
                                <li>
                                    <Link href="/" target="blank_"><FaYoutube className="text-lg"/></Link>
                                </li>
                                <li>
                                    <Link href="/" target="blank_"><FaRss className="text-lg"/></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                {/*Botão mobile*/}
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setVisible(!visible)}
                    aria-label="Menu"
                >
                    {visible ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {/*Menu mobile*/}
            {visible && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                    <nav className="px-6 pb-2">
                        <ul className="flex flex-col space-y-2">
                            <li className='flex justify-between items-center'>
                                <Link 
                                    href="/magazine" 
                                    className="text-sm font-semibold uppercase block py-2 "
                                    onClick={() => setVisible(false)}
                                >
                                    Magazine
                                </Link>
                                <FaArrowRight />
                            </li>
                            <hr/>
                            <li className='flex justify-between items-center'>
                                <Link 
                                    href="/podcast" 
                                    className="text-sm font-semibold uppercase block py-2 "
                                    onClick={() => setVisible(false)}
                                >
                                    Podcast
                                </Link>
                                <FaArrowRight />
                            </li>
                            <hr/>
                            <li className='flex justify-between items-center'>
                                <Link 
                                    href="/authors" 
                                    className="text-sm font-semibold uppercase block py-2 "
                                    onClick={() => setVisible(false)}
                                >
                                    Authors
                                </Link>
                                <FaArrowRight />
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            <hr/>
        </div>
    )
};
export default Header