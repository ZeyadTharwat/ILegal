/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const barChartData: ChartData<"bar", number[], string> = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Rent Paid",
        data: [3000, 2500, 3200, 4000, 2800, 3400, 3900, 4100, 3600, 4500, 4200, 4700],
                //@ts-expect-error
        backgroundColor: function (context: { chart: ChartJS }) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Chart not yet initialized
          }

          const gradient1 = ctx.createLinearGradient(
            chartArea.left,
            chartArea.top,
            chartArea.left,
            chartArea.bottom
          );
          gradient1.addColorStop(0, "#114B7E");
          gradient1.addColorStop(1, "#1F88E4");

          const gradient2 = ctx.createLinearGradient(
            chartArea.left,
            chartArea.top,
            chartArea.right,
            chartArea.top
          );
          gradient2.addColorStop(0, "#DD1C55");
          gradient2.addColorStop(1, "#770F2E");
        //@ts-expect-error
          return context.dataIndex % 2 === 0 ? gradient1 : gradient2;
        },
        borderRadius: 10,
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      title: {
        display: true,
        text: "Created Documents",
        font: {
          size: 16, // Set the font size
          weight: 500, // Set the font weight
        },
        color: "#000", // Set the text color
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        grid: {
          display: false, // Hides grid lines for x-axis
        },
      },
      y: {
        display: false, // Hides the y-axis completely
      },
    },
  };

  return <Bar data={barChartData} options={barChartOptions} />;
};

export default BarChart;
