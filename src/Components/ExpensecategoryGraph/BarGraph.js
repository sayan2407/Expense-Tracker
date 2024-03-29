import { useAppContext } from "../../context/AppProvider";
import "./graphs.css";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const BarGraph = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { transactions, expense } = useAppContext();
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    if (transactions.length === 0) return; // Add this check

    const categoryExpenses = {};

    transactions.forEach((item) => {
      if (item.type === "debit") {
        categoryExpenses[item.category] =
          (categoryExpenses[item.category] || 0) + item.amount;
      }
    });

    // Convert categoryExpenses object to array of objects
    const categoriesArray = Object.keys(categoryExpenses).map((category) => ({
      category,
      expense: categoryExpenses[category],
    }));

    // Sort categories by expense in descending order
    categoriesArray.sort((a, b) => b.expense - a.expense);

    // Get the top 3 categories
    const top3Categories = categoriesArray.slice(0, 3);

    setTopCategories(top3Categories);
  }, [transactions]);

  const chartData = {
    labels: topCategories.map((category) => category.category),
    datasets: [
      {
        label: "Expense",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.6)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: topCategories.map((category) => category.expense),
      },
    ],
  };

  console.log("chartData", chartData);

  return (
    <div className="say-top-expense">
      <h2 className="say-heading">Top Expense</h2>
      {
        (topCategories.length) ? (
          <div className="bar-graph">
          <Bar
            data={chartData}
            options={{
              indexAxis: 'y', // Change to 'y' to make y-axis horizontal
              scales: {
                x: { // Configure x-axis settings
                  beginAtZero: true, // Adjust as needed
                },
              },
            }}
          />
        </div>
        ) : (
          <h3>No Expenses Found</h3>
        )
      }
   
    </div>
  );
};

export default BarGraph;
