import Image from "next/image";
import {getMagazineData} from "../../utils/utils"
import {getAuthorsData} from "../../utils/utils"
import MagazineCardFront from "./FrontpageCards/MagazineCardFront"
import WelcomeText from "./WelcomeText";
import Carrossel from "./Carrossel";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import FrontpageSections from "./FrontpageSections";


const Frontpage = () => {
    const MagazineData = getMagazineData()
    const AuthorsData = getAuthorsData()
    return(
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <WelcomeText text="art-life"/>
            <Carrossel/>
            {/*Central Post*/}
            {MagazineData.slice(0,1).map((data)=> {
                const author = AuthorsData.find(a => a.id === data.authorId)
                return(
                    <div className='flex flex-col-reverse md:flex-col py-8' key={data.id}>
                        <div className='flex flex-col py-4 md:py-8 lg:flex-row'>
                            <div className='flex flex-col w-full lg:w-1/2'>
                                <h1 className='text-4xl font-bold uppercase sm:text-5xl xl:w-[80%] lg:text-7xl '>{data.title}</h1>
                            </div>
                            <div className='flex flex-col w-full mt-4 lg:mt-0 lg:w-1/2'>
                                <p className=" text-base font-normal sm:text-lg">{data.description}</p>
                                <div className='mt-6 flex flex-col items-start md:items-center md:justify-between md:flex-row 2xl:mt-12'>
                                    <section className='flex flex-col space-y-1 2xl:flex-row 2xl:space-x-6 2xl:space-y-0'>
                                        <h1 className='font-bold text-normal'>Text 
                                            <Link href={`/authors/${author.id}`}>
                                                <span className='font-normal ml-2 text-lx underline'>{author?.name}</span>
                                            </Link>
                                        </h1>
                                        <h1 className='font-bold text-normal'>Date 
                                            <span className='font-normal ml-2 text-lx '>{data.date}</span>
                                        </h1>
                                        <h1 className='font-bold text-normal'>Read 
                                            <span className='font-normal ml-2 text-lx '>{data.readTime}</span>
                                        </h1>
                                    </section>
                                    <Link href='/streetart' className='w-auto mt-4 border rounded-full px-3 py-1 uppercase text-sm 
                                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                                        {data.badge}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image 
                            src={data.imgLarge} 
                            alt="Test image" 
                            width={1520} 
                            height={1076}
                            className="w-full h-[380px] sm:h-auto md:w-full md:h-auto"
                        />
                    </div>   
                )})}
            {/*Magazine cards*/}
            <div className="w-full flex flex-col md:flex-row ">
                <div className="w-full lg:w-[75%]">
                    {MagazineData.slice(1,7).map((data)=>{
                        const author = AuthorsData.find(a => a.id === data.authorId)
                        return(
                        <MagazineCardFront
                            key={data.id}
                            id={data.id}
                            img={data.img}
                            title={data.title}
                            description={data.description}
                            authorName={author?.name}
                            date={data.date}
                            readTime={data.readTime}
                            badge={data.badge}
                            authorId={author.id}
                            
                        />
                    )})}
                    <div className='py-8 md:py-10'>
                        <Link href="/magazine" className="flex items-center w-fit group">
                            <h1 className='uppercase  font-bold'>All Articles</h1>
                            <IoMdArrowForward className="text-black text-xl ml-1 transition-all duration-300 group-hover:translate-x-1/2" />
                        </Link>
                    </div>
                    
                </div>
                <div className="hidden lg:block flex flex-col py-10 pl-16 lg:w-[35%] xl:pl-22 2xl:pl-36">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base uppercase">Printmagazine</h1>
                        <h1 className="font-bold text-5xl mt-1">03 / 2022</h1>
                            <Image 
                                src={"/assets/magazin-cover-front.png"} 
                                alt="Test image" 
                                width={369} 
                                height={461}
                                className=" w-auto h-auto mt-6 "
                            />
                        <button className="w-full mt-3 bg-black text-white uppercase py-5 border text-sm font-semibold tracking-tight
                        hover:bg-white hover:text-black hover:font-bold transition-all duration-500 cursor-pointer">buy now</button>
                    </div>
                    <div className="mt-16">
                        <h1 className="text-base font-bold uppercase">Popular posts</h1>
                        {MagazineData.slice(0,3).map((data)=> {
                            const author = AuthorsData.find(a => a.id === data.authorId)
                            return(
                              <div className="mt-6 flex flex-col" key={data.id}>
                                <div className='flex flex-row pb-6'>
                                    <span className="font-bold text-2xl">0{data.id}</span>
                                    <section className="flex flex-col ml-6">
                                        <Link href={`/magazine/${data.id}`}>
                                            <h1 className="font-bold text-2xl">{data.title}</h1>
                                        </Link>
                                        <p className="font-bold text-sm mt-2 ">Author
                                            <Link href={`/authors/${author.id}`}>
                                                <span className="font-normal underline ml-2">{author.name}</span>
                                            </Link>
                                        </p>
                                    </section>
                                </div>
                                <hr/>
                            </div>  
                            )})}
                    </div>
                    <div className="flex flex-col mt-16">
                        <h1 className="text-base font-bold uppercase">Newsletter</h1>
                        <h1 className="font-bold text-4xl mt-2 2xl:w-[90%]">Design News to your inbox</h1>
                        <input type="email" placeholder="Email" className="w-full mt-3 bg-white text-[#666666] placeholder:text-[#666666] border border-[#e5e5e5] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                        <button className="w-full mt-3 bg-black text-white uppercase py-5 border text-sm font-semibold tracking-tight cursor-pointer">sign up</button>
                    </div>
                </div>
            </div>
            <FrontpageSections
                authors={false}
                podcasts={true}
            />
            <FrontpageSections
                authors={true}
                podcasts={false}
            />
        </div>
    )
};

export default Frontpage;

