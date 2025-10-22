"use client";
import WelcomeText from "../components/WelcomeText";
import { getMagazineData } from "../../utils/utils";
import { getAuthorsData } from "../../utils/utils";
import MagazineCards from "../components/MagazineCards";
import Link from "next/link";

export default function Sculptures () {
    const magazineData = getMagazineData();
    const authorsData = getAuthorsData();

    const filteredMagazines = magazineData.filter(item => 
        item.badge.toLowerCase() === "sculptures"
    );
    return(
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <WelcomeText text="magazine" />
            
            <div className="py-6 flex flex-col justify-between items-center md:flex-row md:py-16" >
                <h1 className="font-bold uppercase">Sculptures</h1>
                <section className='space-x-2 mt-2 md:mt-0'>
                    <Link href="/streetart" className='w-auto border rounded-full px-3 py-1 uppercase text-xs 
                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                            street art
                    </Link>
                    
                    <Link href="/art" className='w-auto border rounded-full px-3 py-1 uppercase text-xs 
                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                            Art
                    </Link>
                </section>
            </div>

            <div className="pb-6 md:pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredMagazines.map((data) => {
                    const author = authorsData.find(a => a.id === data.authorId);
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
                            author={author?.name}
                            authorId={author?.id}
                        />
                    );
                })}
            </div>
        </div>
    )
}