import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  YAxis,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import { formatRupiah } from "../utils/format";
import { useTransaction } from "../hooks/useTransaction";

const ExpenseBarChart = () => {
  const { expenses } = useTransaction();

  const categoryTotals = expenses.reduce((acc, expense) => {
    const category = expense.category;
    const amount = expense.amount;
    acc[category] = (acc[category] || 0) + amount;

    return acc;
  }, {})

  const data = Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount
  }))

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#717171" strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis width={100} tickFormatter={formatRupiah} />
          <Tooltip formatter={(value) => formatRupiah(value)} />
          <Bar
            dataKey="amount"
            fill="#080808"
            fillOpacity={0.85}
            stroke="#000000"
            strokeWidth={2}
            radius={4}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ExpenseBarChart;
