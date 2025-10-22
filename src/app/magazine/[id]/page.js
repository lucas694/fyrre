import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { getMagazineData } from "../../../utils/utils";
import {getAuthorsData} from "../../../utils/utils"
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import MagazineCards from "@/app/components/MagazineCards";

export default async function MagazineDetail({ params }) {
    const { id } = await params;
    const magazineData = getMagazineData();
    const authorsData = getAuthorsData();
    const magazine = magazineData.find(item => item.id === parseInt(id));
    
    // Verificando se a revista foi encontrada
    if (!magazine) {
        return (
            <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
                <section className="flex flex-row justify-between items-center mt-8">
                    <Link href="/magazine"
                        className="flex items-center w-fit group cursor-pointer uppercase font-bold"> 
                        <IoMdArrowBack className="text-black text-xl mr-2 transition-all duration-300 group-hover:-translate-x-1/2" />
                        go back
                    </Link>
                    <h1 className="font-bold uppercase text-3xl md:text-4xl">Magazine</h1>
                </section>
                <div className="flex flex-col py-10 items-center">
                    <h1 className="text-4xl font-bold uppercase text-center">Revista não encontrada</h1>
                    <p className="text-center mt-4">A revista que você está procurando não existe.</p>
                </div>
            </div>
        );
    }

    const author = authorsData.find(a => a.id === magazine.authorId);

    const {title,date,badge,readTime,imgLarge,description,} = magazine;
  
    return (
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <section className="flex flex-row justify-between items-center mt-8">
                <Link  href="/magazine"
                className="flex items-center w-fit group cursor-pointer uppercase font-bold"> 
                <IoMdArrowBack  className="text-black text-xl mr-2 transition-all duration-300 group-hover:-translate-x-1/2" />
                go back
                </Link >
                <h1 className="font-bold uppercase text-3xl md:text-4xl">Magazine</h1>
            </section>

            <div className=" flex flex-col py-10 items-center">
                <div className="flex flex-col justify-between items-center md:flex-row xl:mt-10">
                    <h1 className="text-5xl font-bold uppercase w-[100%]
                    md:text-6xl md:w-[50%] lg:text-7xl xl:w-[60%] xl:text-8xl 2xl:w-[65%] ">{title}</h1>
                    <p className="w-[100%] font-semibold text-sm mt-4 
                    md:w-[50%] md:text-base md:mt-0 xl:text-xl xl:w-[40%] 2xl:w-[45%]">{description}</p>
                </div>

                <div className="flex flex-col mt-10 lg:mt-20">
                    <div className="flex flex-col justify-between items-start md:flex-row md:items-center">
                        <section className='flex flex-col space-y-1 2xl:flex-row 2xl:space-x-6 2xl:space-y-0"md:mt-10'>
                            <h1 className='font-bold text-normal text-sm'>Text 
                                <span className='font-normal ml-2 underline'>{author?.name}</span>
                            </h1>

                            <h1 className='font-bold text-normal text-sm'>Date
                                <span className='font-normal ml-2 '>{date}</span>
                            </h1>

                            <h1 className='font-bold text-normal text-sm'>Read 
                                <span className='font-normal ml-2 '>{readTime}</span>
                            </h1>
                        </section>
                        <button className='w-auto border rounded-full px-3 py-1 uppercase text-sm mt-4
                        md:mt-0 hover:bg-black hover:text-white transition-all duration-500 md:mt-0'>
                            {badge}
                        </button>
                    </div>
                    <Image 
                        src={imgLarge} 
                        alt="Test image" 
                        width={1507} 
                        height={771}
                        className=" w-full h-full mt-6 "
                    />
                </div>

                <div className="w-full flex flex-col-reverse mt-10 md:flex-row md:w-[90%] md:mt-20 xl:w-[80%]">
                    <div className="flex flex-col w-full md:w-[30%] mt-10 md:mt-0 md:sticky md:top-20 self-start h-fit">
                        <section className='flex flex-row items-center px-2'>
                            <Image src={author?.img} 
                                alt="Test image" 
                                width={80} 
                                height={80}
                                className=" w-[80px] h-[80px] rounded-full" 
                            />
                            <h1 className="font-bold text-3xl ml-3">{author?.name}</h1>
                        </section>
                        <hr className="mt-7"/>
                        <section className="flex flex-row justify-between mt-5">
                            <span className="font-bold">Date</span>
                            <p className="font-normal">{date}</p>
                        </section>
                        <section className="flex flex-row justify-between mt-5">
                            <span className="font-bold">Read</span>
                            <p className="font-normal">{readTime}</p>
                        </section>
                        <section className="flex flex-row justify-between mt-5">
                            <span className="font-bold">Share</span>
                            <ul className='flex flex-row items-center justify-center space-x-4'>
                                <li>
                                    <a href="/" target="blank_"><FaInstagram className="text-lg"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaTwitter className="text-lg"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaFacebook className="text-lg"/></a>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="w-full px-6 overscroll-auto md:w-[70%] md:px-18">
                        <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                        <br/>
                        <p>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                            <br/>
                            <br/>
                            Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                        </p>
                        <hr className="mt-10 mb-10"/>
                        <h1 className="px-6 font-bold text-4xl md:px-20 md:text-6xl">The greatest glory in living lies not in never falling, but in rising every time we fall.</h1>
                        <hr className="mt-10 mb-10"/>
                        <p className="font-bold">Est pellentesque elit ullamcorper dignissim. Consectetur a erat nam at. Blandit libero volutpat sed cras ornare arcu. Iaculis urna id volutpat lacus laoreet. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                        <br/>
                        <p>Vitae turpis massa sed elementum tempus egestas sed. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Viverra justo nec ultrices dui sapien eget. At risus viverra adipiscing at in tellus integer feugiat. Elementum eu facilisis sed odio morbi quis commodo. Arcu cursus vitae congue mauris rhoncus aenean. Auctor elit sed vulputate mi sit amet mauris commodo quis. Lectus sit amet est placerat in egestas erat imperdiet sed. Eu mi bibendum neque egestas congue quisque. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra vel turpis nunc eget lorem. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. In metus vulputate eu scelerisque felis imperdiet. Elementum pulvinar etiam non quam lacus suspendisse. Sem fringilla ut morbi tincidunt augue. Id venenatis a condimentum vitae sapien. Varius quam quisque id diam vel.
                            <br/>
                            <br/>
                            Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Neque vitae tempus quam pellentesque nec. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Mattis enim ut tellus elementum sagittis. In fermentum et sollicitudin ac orci phasellus. Est sit amet facilisis magna etiam tempor orci. Lacinia at quis risus sed vulputate odio ut. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean vel elit scelerisque mauris pellentesque. Gravida arcu ac tortor dignissim. Ac tortor dignissim convallis aenean.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col w-full py-10 lg:py-24">
                <hr/>
                <div className="flex flex-col justify-between w-full items-center py-14  md:flex-row">
                    <div className="overflow-hidden">
                        <div>
                            <h1 className="text-5xl font-bold uppercase md:text-8xl">Latest Posts</h1>
                        </div>
                    </div>
                    <Link href="/magazine" className="flex items-center w-fit mt-4 md:mt-0 group">
                        <h1 className='uppercase font-bold'>see all</h1>
                        <IoMdArrowForward className="text-black text-xl ml-1 transition-all duration-300 group-hover:translate-x-1/2" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {magazineData.slice(1,4).map((data)=>{
                        const relatedAuthor = authorsData.find(a => a.id === data.authorId);
                        return(
                            <MagazineCards
                                key={data.id}
                                id={data.id}
                                img={data.img}
                                title={data.title}
                                description={data.description}
                                author={relatedAuthor?.name}
                                date={data.date}
                                readTime={data.readTime}
                                badge={data.badge}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
  );
}