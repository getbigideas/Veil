export function TrackOrder() {
  return (
    <>
      <p id="trackOrder" className="mt-14 pt-1 pb-4 text-[40px] font-bold text-center font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
        {" "}
        Track your Order{" "}
      </p>
      <p className="font-inter text-[#8756DA]">
        Already have an order number? Check the status of your order
      </p>
      <div className="p-4 flex mt-7 mb-28 flex-1 w-1/3 items-center  shadow-custom border border-[#343445] bg-[#202029] rounded-md flex-row gap-4">
        <div className="flex flex-2 bg-[rgb(22,22,28)] rounded-md">
          <input
            className="flex flex-2 bg-[#16161c] p-3 rounded-md font-bold text-2xl hover:border hover:border-[#8756DA] outline-0  focus:border-[#8756DA]"
            placeholder="#6PCF012721"
          ></input>
        </div>

        <div className="flex-1 rounded-md p-4 bg-[#6354b8] hover:bg-[#7660ee] flex text-white items-center justify-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="me-2"
          >
            <g fill="currentColor">
              <path d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z"></path>
            </g>
          </svg>
          <p>Track Order</p>
        </div>
      </div>
    </>
  );
}
