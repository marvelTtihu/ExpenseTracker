import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTransaction } from "../hooks/useTransaction";
import { formatRupiah } from "../utils/format";

const COLORS = ["#FF0000", "#FF8000", "#FFFF00", "#80FF00", "#00FF00", "#00FF80", "#00FFFF", "#0080FF", "#0000FF", "#8000FF", "#FF00FF", "#FF0080"];

export default function ExpensePieChart() {
    const { expenses } = useTransaction();

    const categoryTotals = expenses.reduce((acc, expense) => {
        const category = expense.category;
        const amount = Number(expense.amount);
        acc[category] = (acc[category] || 0) + amount;

        return acc;
    }, {})

    const data = Object.entries(categoryTotals).map(([category, total], index) => ({
        name: category,
        value: total,
        fill: COLORS[index % COLORS.length],
    }))

    const renderCustomizedLabel = ({ percent }) => {
        return `${(percent * 100).toFixed(0)}%`
    }

    return(
        <div className='w-full h-[350px]'>
            <ResponsiveContainer>
                <PieChart>
                    <Pie 
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    label={renderCustomizedLabel}
                    stroke="none"
                    />
                    <Tooltip formatter={formatRupiah}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}