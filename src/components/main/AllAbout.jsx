import AboutCard from './AboutCard'

const data = [
  {
    image: "/assets/privacy-driven.webp",
    title: "Privacy-Driven",
    text: "Anonymized exchange with no sign-ups or limits.",
  },
  {
    image: "/assets/seamless-process.webp",
    title: "Seamless Exchange",
    text: "Fast and effective exchange between wallets and cryptocurrencies.",
  },
  {
    image: "/assets/no-limits-wallet.webp",
    title: "Zero Wallet Limits",
    text: "No wallet or amount limitations on all exchanges through us!",
  },
];

export function AllAbout() {
  return (
      <section className="flex flex-col bg-[#1e1e26] w-full items-center">
        <p className="my-12 pt-12 pb-4  text-3xl text-center font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
          {" "}
          We are all about privacy and security{" "}
        </p>
        <div className="flex w-[1280px] px-[1rem] py-4 gap-6">
          {data.map((item, index) => (
            <AboutCard  key={index} item={item}/>
          ))}
        </div>
      </section>
  );
}
