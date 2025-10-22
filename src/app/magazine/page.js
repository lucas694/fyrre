"use client";
import WelcomeText from "../components/WelcomeText";
import {getMagazineData} from "../../utils/utils"
import {getAuthorsData} from "../../utils/utils"
import MagazineCards from "../components/MagazineCards";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function MagazinePage () {
    const MagazineData = getMagazineData()
    const AuthorData = getAuthorsData()
    const [currentPage, setCurrentPage] = useState(1)
    const cardsPerPage = 6
    const totalPages = Math.ceil(MagazineData.length / cardsPerPage)
    
    const startIndex = (currentPage - 1) * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    const currentCards = MagazineData.slice(startIndex, endIndex)
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return(
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <WelcomeText text="magazine"/>
            <div className="py-6 flex flex-col justify-between items-center md:flex-row md:py-20" >
                <h1 className="font-bold uppercase">Categories</h1>
                <section className='space-x-2 mt-2 md:mt-0'>
                    <Link href="/streetart" className='w-auto border rounded-full px-3 py-1 uppercase text-xs 
                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                        street art
                    </Link>
                    
                    <Link href="/sculptures" className='w-auto border rounded-full px-3 py-1 uppercase text-xs 
                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                        sculptures
                    </Link>

                    <Link href="/art" className='w-auto border rounded-full px-3 py-1 uppercase text-xs 
                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                        Art
                    </Link>
                </section>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {currentCards.map((data) => {
                    const author = AuthorData.find(a => a.id === data.authorId)
                return (
                    <MagazineCards
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        title={data.title}
                        description={data.description}
                        date={data.date}
                        readTime={data.readTime}
                        badge={data.badge}
                        //  find
                        author={author?.name}
                        authorId={author.id}
                    />
                )
                })}
            </div>
            <div className="flex justify-between items-center py-10">
                {currentPage > 1 && (
                    <button 
                        onClick={handlePreviousPage}
                        className="flex items-center w-fit group cursor-pointer uppercase font-bold"
                    > 
                        <IoMdArrowBack className="text-black text-xl mr-1 transition-all duration-300 group-hover:-translate-x-1/2" />
                        Previous
                    </button>
                )}
                
                <div className="text-sm text-gray-600">
                    Página {currentPage} de {totalPages}
                </div>
                
                {currentPage < totalPages && (
                    <button 
                        onClick={handleNextPage}
                        className="flex items-center w-fit group cursor-pointer uppercase font-bold"
                    > 
                        Next
                        <IoMdArrowForward className="text-black text-xl ml-1 transition-all duration-300 group-hover:translate-x-1/2" />
                    </button>
                )}
            </div> 
        </div>
    )
}