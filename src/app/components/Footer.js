import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <div className="flex flex-col bg-black">
            <div className="relative flex flex-col items-center w-full overflow-hidden bg-black text-white md:flex-row">
                <div className="flex-1 flex items-center py-2 overflow-hidden md:py-5">
                    <div className="flex animate-scroll whitespace-nowrap">
                        <span className="mx-2 font-bold text-2xl uppercase">Newsletter+++ Newsletter+++ Newsletter+++</span>
                        <span className="mx-2 font-bold text-2xl uppercase">Newsletter+++ Newsletter+++ Newsletter+++</span>
                        <span className="mx-2 font-bold text-2xl uppercase">Newsletter+++ Newsletter+++ Newsletter+++</span>
                        <span className="mx-2 font-bold text-2xl uppercase">Newsletter+++ Newsletter+++ Newsletter+++</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-6 md:p-10 xl:p-20 2xl:p-30 2xl:pb-14 ">
                <div className="w-full flex flex-col items-center justify-between md:flex-row">
                    <h1 className="text-white text-5xl font-bold uppercase w-full lg:text-7xl 2xl:text-8xl 2xl:w-2/3">Design news to your inbox</h1>
                    <section className="flex flex-col space-x-4 w-full mt-4 md:mt-0 md:pl-6 lg:flex-row lg:w-1/2 2xl:w-1/3 ">
                        <input type="email" placeholder="Email" className="w-full mt-3 bg-white text-[#666666] placeholder:text-[#666666] border border-[#e5e5e5] px-4 py-3 lg:mt-0" />
                        <button className="w-full mt-3 bg-black text-white uppercase py-4 border text-sm font-semibold tracking-tight cursor-pointer px-2 lg:mt-0 xl:w-1/3">sign up</button>
                    </section>
                </div>

                <div className="w-full flex flex-col  py-20 md:flex-row">
                    <div className='w-[100%] md:w-[35%] xl:w-[40%]'>
                        <Image 
                            src={"assets/footer-logo.svg"} 
                            alt="header" 
                            width={210} 
                            height={19}
                            className="w-auto h-auto"
                        />
                    </div>

                    <div className=' text-white w-[100%] flex flex-col space-x-10 md:w-[65%] md:flex-row xl:w-[60%]'>
                        <ul className='border-t border-[#353535] w-full mt-6 md:mt-0'>
                            <li className="mt-6 font-semibold ">
                                <Link href='/art'>Art</Link>
                            </li>
                            <li className="mt-6 font-semibold">
                                <Link href='/sculptures'>Sculptures</Link>
                            </li>
                            <li className="mt-6 font-semibold">
                                <Link href='/streetart'>Street Art</Link>
                            </li>
                        </ul>
                        <ul className='border-t border-[#353535] w-full mt-6 md:mt-0'>
                            <li className="mt-6 font-semibold">
                                <Link href='/magazine'>Magazine</Link>
                            </li>
                            <li className="mt-6 font-semibold">
                                <Link href='/podcast'>Podcast</Link>
                            </li>
                            <li className="mt-6 font-semibold">
                                <Link href='/authors'>Authors</Link>
                            </li>
                        </ul>
                        <ul className='border-t border-[#353535] w-full mt-6 md:mt-0'>
                            <li className="mt-6 font-semibold">
                                <Link href='/#'>Styleguide</Link>
                            </li>
                            <li className="mt-6 font-semibold">
                                <Link href='/#'>Licensing</Link>
                            </li>
                            <li className="mt-6 font-semibold">
                                <Link href='/#'>Changelog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className='text-white '>© Developed by 
                    <a href="https://www.linkedin.com/in/lucascardoso-assuncao/" target="_blank" className='ml-2 underline'>Lucas Cardoso</a>
                </span>
            </div>
        </div>
    )
};export default Footer