export function Head() {
  return (
    <div className="w-full relative h-[90vh] z-1">
      <div className="flex justify-center py-60 h-full">
        <div className="flex-1 w-[100%] max-w-[640px] p-6">
          <p className="text-center text-[#8671ff] text-6xl font-spaceGrotesk font-bold mb-5"> Privacy Driven</p>
          <p className="text-center text-[white] text-6xl font-spaceGrotesk font-bold"> Crypto Exchange</p>
          <p className="text-center text-[#8576da] mt-10 text-[20px] leading-loose">
            Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless
            security and privacy. No sign-up or limits.
          </p>
          <p className="text-center text-[#8576da] mt-3 block text-[20px]" >Powered by our Veil utility token.</p>
          <a className="flex text-center align-middle justify-center pt-5 font-bold underline text-xl text-white link-offset-3" href="#">
            {" "}
            <span>Try the Exchange Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" fill="none" stroke="currentColor" strokeMiterlimit="10">
                <line x1="2" y1="12" x2="15" y2="12"></line><polygon points="15 17 15 7 22 12 15 17">
                </polygon>
              </g>
            </svg>
          </a>
          <div className="pt-16 flex gap-5">
            <div className="flex-1 rounded-md border border-solid border-[#343445] p-4 text-center">
              <p className="uppercase text-white mb-2 text-sm ">lifetime volume swaped</p>
              <p className="text-2xl text-[#8671ff] font-bold">$43,005,617</p>
            </div>
            <div className="flex-1 rounded-md border border-solid border-[#343445] p-4 text-center">
              <p className="uppercase text-white mb-2 text-sm ">lifetime volume swaped</p>
              <p className=" text-2xl  text-[#8671ff] font-bold">$423,816</p>
            </div>
          </div>
        </div>
      </div>
      <video
        className="absolute w-full h-full top-0 object-cover z-[-1] "
        autoPlay={true}
        loop
        muted
      >
        <source src="/assets/herobackground.webm" type="video/webm" />
      </video>
    </div>
  );
}
