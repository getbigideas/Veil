import RecentCard from './RecentCard'
const data = [
  {
    time: "20/12/2024 - 05:43",
    from: "/assets/a/avax.svg",
    to: "/assets/a/eth.svg",
    amount: "528",
  },
  {
    time: "20/12/2024 - 05:35",
    from: "/assets/a/sol.svg",
    to: "/assets/a/eth.svg",
    amount: "4.07",
  },
  {
    time: "20/12/2024 - 05:34",
    from: "/assets/a/sol.svg",
    to: "/assets/a/eth.svg",
    amount: "6.2",
  },
  {
    time: "20/12/2024 - 05:34",
    from: "/assets/a/sol.svg",
    to: "/assets/a/eth.svg",
    amount: "99.2",
  },
  {
    time: "20/12/2024 - 05:33",
    from: "/assets/a/dai.svg",
    to: "/assets/a/eth.svg",
    amount: "104711",
  },
  {
    time: "20/12/2024 - 04:53",
    from: "/assets/a/usdc.svg",
    to: "/assets/a/eth.svg",
    amount: "36833",
  },
  {
    time: "20/12/2024 - 04:34",
    from: "/assets/a/dai.svg",
    to: "/assets/a/eth.svg",
    amount: "70000",
  },
  {
    time: "20/12/2024 - 04:32",
    from: "/assets/a/dai.svg",
    to: "/assets/a/eth.svg",
    amount: "73512",
  },
  {
    time: "20/12/2024 - 03:25",
    from: "/assets/a/usdt.svg",
    to: "/assets/a/usdt.svg",
    amount: "499.5",
  },
  {
    time: "20/12/2024 - 20:35",
    from: "/assets/a/usdt.svg",
    to: "/assets/a/usdt.svg",
    amount: "1117",
  },
];
export function RecentTransaction() {
  return <>
        <p className="my-12 pt-1 pb-4 text-[40px] font-bold text-center font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
          {" "}
          Recent Transaction{" "}
        </p>
        <div className="w-[952px]">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex shadow-custom border border-[#343445] bg-[#202029] rounded-md place-content-between px-5 py-4 mb-2"
            >
              <RecentCard item={item} />
            </div>
          ))}
        </div>
  </>;
}
