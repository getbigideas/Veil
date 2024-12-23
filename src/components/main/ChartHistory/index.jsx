import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartHistory() {
  const chartData = {
    labels: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [0, 200000,  135000, 200000, 100,  400000, 200000],
        borderColor: "#997404",
        backgroundColor: "#ffc107",
        borderRadius: 100,
        borderSkipped: false,
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        titleRadius: 100,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#ddd",
      },
      title: {
        pointRadius: 10,
      },
    },
    scales: {
      x: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };
  return (
    <div className="flex justify-center bg-[#16161c] border-t-2 border-[#343445] flex-col items-center">
      <div className="flex w-[1248px] flex-col justify-centers items-center">
        <div className="w-full flex mt-20 justify-center">
          <span className="text-4xl font-bold font-spaceGrotesk text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200">
            {" "}
            Monthly Revenue & Payouts{" "}
          </span>
        </div>
        <p className="text-[#7b6ae5] text-center mt-10 block">
          {" "}
          Overview for the past 12 Months
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5 pb-20 pt-20">
        <div className="w-full">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="lg:w-[432px] w-full ">
          <table className="w-full table-auto border border-[#373b3e] rounded-lg overflow-hidden font-home_header">
            <thead className="border border-[#373b3e] ">
              <tr className="bg-[#202029] text-white ">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-right">Payout</th>
              </tr>
            </thead>
            <tbody className="bg-[#202029] text-gray-300 border border-[#373b3e]">
              <tr className="hover:bg-[#343445] bg-[#272730] cursor-pointer border border-[#373b3e]">
                <td className="py-3 px-4 border border-[#373b3e]">29/03/2024</td>
                <td className="py-3 px-4 text-right flex justify-end items-center ">
                  <p className="mb-0">4.20 ETH</p>
                  <span className="text-gray-500 ml-2">$16.2K</span>
                </td>
              </tr>
              <tr className="hover:bg-[#343445] cursor-pointer border border-[#373b3e]">
                <td className="py-3 px-4 border border-[#373b3e]">08/04/2024</td>
                <td className="py-3 px-4 text-right flex justify-end items-center">
                  <p className="mb-0 ">1.60 ETH</p>
                  <span className="text-gray-500 ml-2">$6.2K</span>
                </td>
              </tr>
              <tr className="hover:bg-[#343445] cursor-pointer bg-[#272730] border border-[#373b3e]">
                <td className="py-3 px-4 border border-[#373b3e] ">26/04/2024</td>
                <td className="py-3 px-4 text-right flex justify-end items-center">
                  <p className="mb-0">2.00 ETH</p>
                  <span className="text-gray-500 ml-2">$7.7K</span>
                </td>
              </tr>
              <tr className="hover:bg-[#343445] cursor-pointer border border-[#373b3e]">
                <td className="py-3 px-4 border border-[#373b3e]">10/06/2024</td>
                <td className="py-3 px-4 text-right flex justify-end items-center ">
                  <p className="mb-0">1.90 ETH</p>
                  <span className="text-gray-500 ml-2">$7.3K</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
            >
              Prev
            </button>
            <span className="mx-4 text-gray-300">
              Page <span className="font-bold">8</span> of{" "}
              <span className="font-bold">8</span>
            </span>
            <button
              type="button"
              className="px-4 py-2 bg-gray-700 text-white rounded-md cursor-not-allowed"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
