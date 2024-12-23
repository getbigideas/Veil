export default function Hodler({item}) {
  return (
    <div className="flex flex-1 items-center  shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
      <p className="text-white bold text-2xl p-3 font-spaceGrotesk">
        {item.title}
      </p>
      <div className="bg-[#202029] text-[#8774fc] w-full p-6 m-0 flex justify-center">
        <img
          alt="Veil Brand Icon"
          loading="lazy"
          src={item.image}
          className="w-[73px] h-[40px] text-[#8774fc]  "
        />
        <p className="text-5xl text-[#8774fc] font-spaceGrotesk font-bold">
          {item.amount}
        </p>
      </div>
    </div>
  );
}
