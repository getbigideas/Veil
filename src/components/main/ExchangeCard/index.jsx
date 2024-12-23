function index() {
  return (
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
  );
}

export default index;
