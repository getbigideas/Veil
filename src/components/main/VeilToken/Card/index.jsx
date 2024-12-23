export default function index({ item }) {
  return (
    <div className="p-4 flex flex-1  shadow-custom border border-[#343445] bg-[#202029] rounded-md mt-3 justify-between">
      <p className="text-white text-xl"> {item.name}</p>
      <p className= "text-xl font-bold" style={{ color: item.color }}> {item.percent}</p>
    </div>
  );
}
