import Hodler from "./Hodler";
import man from "/assets/status/man.svg";
import change from "/assets/status/change.svg";
import eth from "/assets/status/eth.svg";
import increase from "/assets/status/increase.svg";
import Card from "./Card";
import Chart from "./Chart";
import { useEffect, useState } from "react";

const items = [
  { title: "Total Holders", amount: "5,687", image: man },
  { title: "Total Transactions", amount: "41,573", image: change },
  { title: "Liquidity", amount: "275.0K", image: eth },
  { title: "Market Cap", amount: "903.5K", image: increase },
];

const datas = [
  { name: "Marketing:", percent: "30%", color: "#d83147" },
  { name: "Revenue Share:", percent: "20%", color: "#31cd78" },
  { name: "Team:", percent: "20%", color: "#8774fc" },
  { name: "Development:", percent: "15%", color: "#34cbef" },
  { name: "Treasury:", percent: "15%", color: "#ef9f20" },
];

export default function Index() {
  const [time, setTime] = useState(200000);
  // const Chart2 = useMemo(() => Chart, [])
  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="flex justify-center bg-[#16161c] py-4">
      <div className="w-[1280px] py-16 flex flex-col">
        <div className="w-full flex justify-center">
          <span className="text-4xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
            {" "}
            $Veil Token Stats{" "}
          </span>
        </div>
        <div className="text-white flex justify-center pt-6 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 293.775 293.667"
          >
            <g fill="currentColor">
              <g
                id="etherscan-logo-light-circle"
                transform="translate(-219.378 -213.333)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M280.433 353.152a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11v-97.266a12.469 12.469 0 0 1 12.467-12.47h20.779a12.47 12.47 0 0 1 12.467 12.47v90.276s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577V290.9a12.466 12.466 0 0 1 12.465-12.467h20.779a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537 146.6 146.6 0 0 0-136.644-99.006c-81.439-1.094-148.744 65.385-148.736 146.834a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173 508.86 508.86 0 0 0 14.643-1.518 10.383 10.383 0 0 0 9.209-10.306v-77.824"
                  fill="currentColor"
                ></path>
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M244.417 398.641A146.808 146.808 0 0 0 477.589 279.9c0-3.381-.157-6.724-.383-10.049-53.642 80-152.686 117.405-232.79 128.793"
                  transform="translate(35.564 80.269)"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>
          <a
            className="link-offset-3 text-white underline pl-2 "
            target="_blank"
            href="https://etherscan.io/address/0xb244b3574a5627849fca2057e3854340def63071"
          >
            View on Etherscan
          </a>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          {items.map((item, index) => (
            <Hodler key={index} item={item} />
          ))}
        </div>
        <div className="flex mt-20 gap-72">
          <div className="flex-1 ">
            <p className="text-[#8774fc] font-bold text-4xl font-spaceGrotesk">
              {" "}
              Breakdown
            </p>
            <div className="w-full flex mt-3">
              <span className="text-4xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
                {" "}
                Our Revenue Allocation{" "}
              </span>
            </div>
            <p className="text-white mt-8 mb-10">
              Our Veil revenue is generated from the exchange processes & fees
              from the $Veil token. This is distributed to certain allocations
              for the upkeep of the platform, and distributed sharing. Here is
              the list of our allocations for each category.
            </p>
            {datas.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          <div className="flex-1 p-20">
            <Chart />
          </div>
        </div>
        <div className="flex items-center flex-1 flex-col mt-52">
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
          <div className="flex-1 pb-10 mt-4 justify-between flex-wrap flex ">
          <div className=" flex p-4 w-[158px] m-1 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl">
              {" "}
              {Math.floor(time / (3600 * 24))}{" "}
            </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Days </p>
          </div>

          <div className="flex p-4  w-[158px] m-1 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl">
              {" "}
              {Math.floor((time % (3600 * 24)) / 3600)}{" "}
            </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Hours </p>
          </div>

          <div className="flex p-4  w-[158px] m-1 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl">
              {" "}
              {Math.floor((time % 3600) / 60)}{" "}
            </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Minutes </p>
          </div>

          <div className="flex p-4  w-[158px] m-1 shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between gap-6 flex-col items-center px-8 ">
            <p className="text-[#8774fc] font-bold text-5xl"> {time % 60} </p>
            <p className="text-xl text-[#8c8c90] font-bold"> Seconds </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
