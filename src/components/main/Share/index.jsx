export default function Share() {
  return (
    <div className="bg-[url(/tokenomics-bg.webp)]">
      <div className="flex pt-[150px] px-[300px] justify-between flex-row gap-24">
        <div className="flex-1 flex justify-center pl-32">
          <section className="flex flex-col">
            <p className=" font-spaceGrotesk text-3xl text-[#8774fc] font-extrabold mt-10">
              Introducing our
            </p>
            <div className="flex w-full items-center">
              <span className="mt-8 text-3xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
                {" "}
                Revenue Share Program{" "}
              </span>
            </div>
            <div className="text-white flex flex-col gap-5 text-base mt-8">
              <p>
                Join our revenue-sharing program and earn a share of our
                exchange and token fee profits based on your $Veil Token
                ownership.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-9 pb-20">
              <p className="bg-[#7666db] p-5 rounded-md text-white font-bold">
                About Token
              </p>
              <p className="bg-[#7666db] p-5 rounded-md text-white font-bold">
                View RevShare Wallet
              </p>
            </div>
          </section>
        </div>
        <div className="w-[530px] py-20">
          <div className="flex flex-1 items-center shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
            <p className="text-white p-3 font-bold text-2xl">
              Total Paid Out So Far
            </p>
            <div className="bg-[#202029] w-full p-6 m-0 text-center">
              <p className=" mb-2 text-5xl text-[#7f6dec] font-spaceGrotesk font-bold">
                79.71 ETH
              </p>
              <p className="font-inter  text-[#908f94] font-bold text-xl ">
                $261.1K USD
              </p>
            </div>
            <div className="flex bg-[#202029] w-full p-2 m-0 text-center border-t-2 border-[#343445] items-center justify-center">
              <p className="font-inter  text-[#908f94] text-lg ">Last Payout:</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="ms-2 text-[#908f94] hover:text-[#8070ea]"
              >
                <g
                  strokeWidth="1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
                  <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
