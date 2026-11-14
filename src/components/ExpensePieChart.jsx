import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTransaction } from "../hooks/useTransaction";
import { formatRupiah } from "../utils/format";

const COLORS = [
  "#3B82F6", 
  "#10B981", 
  "#F59E0B", 
  "#EF4444", 
  "#8B5CF6", 
  "#EC4899", 
  "#06B6D4", 
  "#F97316", 
  "#14B8A6", 
  "#6366F1", 
  "#84CC16", 
  "#64748B", 
];


export default function ExpensePieChart() {
    const { categoryTotals } = useTransaction();

    const data = Object.entries(categoryTotals || {}).map(([category, total], index) => ({
        name: category,
        value: total,
        fill: COLORS[index % COLORS.length],
    }))

    const renderCustomizedLabel = ({ percent }) => {
        return `${(percent * 100).toFixed(0)}%`
    }

    return(
        <div>
            <div className='w-full h-[350px] '>
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
        </div>
    )
}