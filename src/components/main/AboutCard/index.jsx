export function index({ item }) {
  return (
    <div className="flex flex-1 items-center  shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
      <img
        className="animate-slow-bounce object-contain h-[170px] mx-auto my-6"
        src={item.image}
      ></img>
      <div className="bg-[#202029] w-full p-6 m-0">
        <p className=" mb-2 text-3xl text-white font-spaceGrotesk font-bold">
          {item.title}
        </p>
        <p className="font-inter text-[#8756DA]">{item.text}</p>
      </div>
    </div>
  );
}

export default index;
