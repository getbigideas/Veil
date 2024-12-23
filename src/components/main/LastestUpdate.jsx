import TokenCard from './tokenCard'

const newData = [
  { data: "BEERCOIN(SOL)", date: "Released: 04/12/24", logo: "/assets/beer.webp"},
  { data: "Daddy Tate(SOL)", date: "Released: 04/12/24",logo: "/assets/daddy.webp" },
  { data: "Catizen(TON)", date: "Released: 04/12/24", logo: "/assets/cati.webp" },
];

export function LastestUpdate() {
  return <>
    <p className="my-12 pt-12 pb-4 text-[40px] font-bold text-center font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
      {" "}
      Latest Updates{" "}
    </p>

    <div className="flex w-[1280px] py-4 gap-6">
      {newData.map((item, index) => (
        <TokenCard key={index} item={item} />
      ))}
    </div>
  </>;
}
