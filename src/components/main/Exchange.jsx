export function Exchange() {
  return (
    <>
      <section className="flex flex-col bg-[#1e1e26] w-full items-center">
        <p id="exchange" className="my-12 pt-12 pb-4 text-[40px] font-bold text-center font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
          {" "}
          Exchange Crypto{" "}
        </p>
        <div className="flex w-[952px] py-4 gap-6">
          <div className="flex flex-1 shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
            <p className="font-bold text-[20px] m-4 text-white">You Send</p>
            <div className="bg-[#202029] w-full p-6 m-0">
              <div className="flex border border-[#343445] bg-[#343445] rounded-md py-2 px-4">
                <img className="h-[50px]" src="/assets/btc.svg"></img>
                <div className="flex flex-col ml-5">
                  <p className="text-white font-spaceGrotesk font-bold text-[20px]">
                    BitCoin
                  </p>
                  <p className="text-gray-400 text-[16px]">BTC</p>
                </div>
              </div>
              <input
                placeholder="0.0000"
                className="flex font-extrabold text-[25px] text-gray-400  border border-[#343445] bg-[#343445] rounded-md mt-3  py-[22px] px-[28px] w-full"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex flex-1 shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
            <p className="font-bold text-[20px] m-4 text-white">You Receive</p>
            <div className="bg-[#202029] w-full p-6 m-0">
              <div className="flex border border-[#343445] bg-[#343445] rounded-md py-2 px-4">
                <img className="h-[50px]" src="/assets/eth.svg"></img>
                <div className="flex flex-col ml-5">
                  <p className="text-white font-spaceGrotesk font-bold text-[20px]">
                    Ethereum
                  </p>
                  <p className="text-gray-400 text-[16px]">ETH</p>
                </div>
              </div>
              <input
                placeholder="0.0000"
                className="flex font-extrabold text-[25px] text-gray-400 border border-[#343445] bg-[#343445] rounded-md mt-3  py-[22px] px-[28px] w-full"
              ></input>
            </div>
          </div>
        </div>
        <div className="w-[952px] m-2  flex flex-1 shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
          <p className="font-bold text-[20px] m-4 text-white">
            Receiving Wallet Address
          </p>
          <div className="bg-[#202029] w-full px-6 py-4 m-0">
            <input
              placeholder="Enter Wallet Address"
              className="flex font-extrabold text-[25px] text-gray-400 border border-[#343445] bg-[#343445] rounded-md mt-3  py-[22px] px-[28px] w-full"
            ></input>
          </div>
        </div>
        <div className="flex w-[952px] mt-5">
          <input
            required=""
            type="checkbox"
            className="form-check-input bg-[#16161c]"
          ></input>
          <div className="ml-3 text-[#a6a6a8]">
            By using the site and creating an exchange, you agree to our{" "}
            <span className="text-[#8756DA]">Terms of Services</span>
          </div>
        </div>
        <a
          href="/#exchange"
          className=" mt-5 bg-[#6354b8] w-[952px] hover:bg-[#6c58da] text-white font-bold px-6 py-4 rounded-lg flex items-center transition justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2 hover:motion-safe:animate-spin"
          >
            <g
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
            >
              <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
              <path
                d="M23,12A11,11,0,0,1,2.237,17.073"
                strokeLinecap="butt"
              ></path>
              <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
              <path
                d="M1,12A11,11,0,0,1,21.763,6.927"
                strokeLinecap="butt"
              ></path>
            </g>
          </svg>
          Exchange
        </a>
        <div className="mt-6 mb-20 text-[#a6a6a8]">
          Already have an order number?{" "}
          <span className="text-[#8756DA] underline">Track your order</span>
        </div>
      </section>
    </>
  );
}
