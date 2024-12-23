const index = ({item}) => {
  return (
    <div className="flex flex-1 items-center  shadow-custom border border-[#343445] bg-[#2d2d39] rounded-md flex-col">
      <img
        className=" object-contain h-[100px] mx-auto my-6"
        src={item.logo}
      ></img>
      <div className="flex bg-[#202029] w-full p-6 m-0 flex-col">
        <div className="flex justify-center">
          <p className="font-spaceGrotesk rounded-xl px-2  bg-[#8774fc] font-bold text-white text-lg">
            New Release
          </p>
        </div>
        <div>
          <p className=" block text-center m-3 text-3xl font-bold text-white font-spaceGrotesk">
            New Token Supported:
          </p>
        </div>
        <div>
          <p className=" block text-center m-3 text-3xl font-bold font-spaceGrotesk text-[#8774fc] ">
            {item.data}
          </p>
        </div>
      </div>
      <div className="flex bg-[#202029] w-full p-2 m-0 flex-col text-center border-t border-t-[#343445] text-[#908f94] font-bold rounded-b-lg">
        {item.date}
      </div>
    </div>
  );
}

export default index;