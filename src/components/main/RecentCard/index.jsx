export default function index({ item }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <svg
          className="text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g
            strokeWidth="1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="8" r="7.5"></circle>
            <polyline points="8 3 8 8 13 8"></polyline>
          </g>
        </svg>
        <p className="text-base text-[20px] text-white">{item.time}</p>
      </div>

      <div className="flex items-center gap-2">
        <img className="w-[20px]" src={item.from}></img>
        <p className="text-gray-400">{item.amount} </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="mx-3 text-white"
        >
          <g
            strokeWidth="1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
            <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
          </g>
        </svg>
        <img className="w-[20px]" src={item.to}></img>
      </div>
    </>
  );
}
