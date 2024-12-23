import { useEffect, useState } from "react";

export default function NextShare() {
  const [time, setTime] = useState(200000);
  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="flex justify-center bg-[#16161c] border-t-2 border-[#343445] ">
      <div className="flex items-center flex-1 flex-col mt-32 mb-20 ">
        <p className="text-[#8774fc] font-bold text-4xl font-spaceGrotesk">
          {" "}
          Next Revenue Share Airdrop
        </p>
        <div className="w-full flex mt-3 justify-center">
          <span className="text-5xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
            {" "}
            Countdown till next Payout{" "}
          </span>
        </div>
        <div className="flex-1 pb-10 mt-4 justify-between flex-row gap-3 flex">
          <div className=" flex p-4 w-[158px] m-1 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl">
              {" "}
              {Math.floor(time / (3600 * 24))}{" "}
            </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Days </p>
          </div>

          <div className="flex p-4  w-[158px] m-2 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl">
              {" "}
              {Math.floor((time % (3600 * 24)) / 3600)}{" "}
            </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Hours </p>
          </div>

          <div className="flex p-4  w-[158px] m-2 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl">
              {" "}
              {Math.floor((time % 3600) / 60)}{" "}
            </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Minutes </p>
          </div>

          <div className="flex p-4  w-[158px] m-2 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl"> {time % 60} </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Seconds </p>
          </div>
        </div>
        <p className="text-[#8774fc] mt-28 font-bold text-3xl font-spaceGrotesk">
          {" "}
          Revenue Sharing
        </p>

        <div className="w-full flex mt-3 justify-center">
          <span className="text-5xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
            {" "}
            How does it work?{" "}
          </span>
        </div>
        <p className="text-white w-1/3 text-center mt-12">
          Our revenue sharing program comes from the distributed profits from
          our Veil Token taxes and our exchange processing. We allocate 20% of
          all revenue back to our revenue sharing program. This program will
          airdrop holders* of the Veil Token every 72 hours, with the funds that
          are generated into the RevShare wallet.
        </p>

        <p className="text-[#858588] w-1/3 text-center mt-2">
          *Eligibility: Veil Token Holders holding at-least 1,000,000 Veil
          Tokens.
        </p>
        <p className="bg-[#7666db] p-5 rounded-md text-white font-bold mt-6">
          View RevShare Wallet
        </p>

        <div className="w-full flex  justify-center mt-20">
          <span className="text-5xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
            {" "}
            Our Revenue Income{" "}
          </span>
        </div>

        <p className="text-[#8774fc] mt-4">
          {" "}
          Overview for Revenue generated from Veil Exchange & Token Fees
        </p>
        <div className="flex gap-4 mt-6">
          <div className="flex w-[500px] flex-1 items-center shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
            <p className="text-white p-2 font-bold text-xl">
              Revenue from Exchange
            </p>
            <div className="bg-[#202029] w-full p-6 m-0 text-center">
              <p className=" mb-2 text-5xl text-[#7f6dec] font-spaceGrotesk font-bold">
                3.38 ETH
              </p>
              <p className="font-inter  text-[#908f94] font-bold text-xl ">
                $11.1K USD
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
            <p className="text-white p-2 font-bold text-xl">
              Revenue from Token Fees
            </p>
            <div className="bg-[#202029] w-full p-6 m-0 text-center">
              <p className=" mb-2 text-5xl text-[#7f6dec] font-spaceGrotesk font-bold">
                79.12 ETH
              </p>
              <p className="font-inter  text-[#908f94] font-bold text-xl ">
                $259.4K USD
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 mt-6 mb-20 w-[800px] items-center shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
            <p className="text-white p-2 font-bold text-xl">
              Revenue from Token Fees
            </p>
            <div className="bg-[#202029] w-full p-6 m-0 text-center">
              <p className=" mb-2 text-5xl text-[#7f6dec] font-spaceGrotesk font-bold">
                79.12 ETH
              </p>
              <p className="font-inter  text-[#908f94] font-bold text-xl ">
                $259.4K USD
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
