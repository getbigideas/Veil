export default function index() {
  return (
    <div className="bg-[url(/tokenomics-bg.webp)]">
      <div className="flex pt-[150px] px-[350px] justify-between gap-60">
        <div className="flex-1 flex justify-center">
          <section className="flex flex-col ">
            <div className="flex w-full items-center">
              <span className="mt-12 text-6xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
                {" "}
                Introducing{" "}
              </span>
            </div>
            <p className=" font-spaceGrotesk text-6xl text-[#8774fc] font-extrabold mt-2 mb-5">
              $Veil Token
            </p>
            <div className="text-white flex flex-col gap-5 text-xl">
              <p>
                Introducing our utility token to support the Veil exchange
                platform.
              </p>
              <p>Contract:</p>
              <p>0xb244b3574a5627849fca2057e3854340def63071</p>
            </div>
            <div className="flex items-center gap-10 pt-9 pb-20">
              <p className="bg-[#7666db] p-5 rounded-md text-white bold">
                Buy Token
              </p>
              <p className="underline link-offset-3 text-white bold hover:text-[#8774fc] cursor-pointer">
                View Chat
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-1 justify-center flex-col">
          <div className="flex w-full items-center flex-col">
            <span className="mt-12 text-4xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
              {" "}
              $Veil Tokenomics{" "}
            </span>
            <div className="bg-[#16161c] py-4 px-5 flex justify-between w-[506px] text-xl mt-4 border-b-2 border-b-[#343445]">
              <p className="text-white">
                Token Taxes:{" "}
                <span className="text-[#7a7a7d] text-lg">(Buy/Sell)</span>
              </p>
              <span className="text-[#8774fc] font-bold">5% / 5%</span>
            </div>
            <div className="bg-[#16161c] py-4 px-5 flex justify-between w-[506px] text-xl  border-b-2 border-b-[#343445]">
              <p className="text-white">Total Supply: </p>
              <span className="text-[#8774fc] font-bold">1,000,000,000</span>
            </div>
            <div className="bg-[#16161c] py-4 px-5 flex justify-between w-[506px] text-xl ">
              <p className="text-white">CEX Allocation: </p>
              <span className="text-[#8774fc] font-bold">80,000,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
