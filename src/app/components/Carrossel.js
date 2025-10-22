const Carrossel = () => {
    return(
        <div className="relative flex flex-col items-center w-full overflow-hidden bg-black text-white md:flex-row">
            <div className="flex items-center justify-center px-3 py-2 z-10 bg-black md:px-6 md:py-5">
                <h1 className="uppercase font-bold text-lg">News Ticker+++</h1>
            </div>
            <div className="flex-1 flex items-center py-2 overflow-hidden md:py-5">
                <div className="flex animate-scroll whitespace-nowrap">
                    <span className="mx-2 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit +++,</span>
                    <span className="mx-2 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit +++,</span>
                    <span className="mx-2 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit +++,</span>
                    <span className="mx-2 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
                </div>
            </div>
        </div>
    )
};export default Carrossel