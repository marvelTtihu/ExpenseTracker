import { Bar, BarChart, CartesianGrid, Tooltip, YAxis, XAxis, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { useTransaction } from "../hooks/useTransaction"

const Analytics = () => {
  const { expenses } = useTransaction();

    const data = useMemo(() => {
        const grouped = expenses.reduce((acc, current) => {
            const existing = acc.find(item => item.category === current.category);

            if(existing){
                existing.amount += Number(current.amount);
            } else {
                acc.push({
                    category: current.category,
                    amount: Number(current.amount)
                });
            }
            return acc;
        }, [])
        return grouped;
    }, [expenses]);

  return (
    <section className="min-h-dvh bg-slate-100">
      <section className="max-w-5xl mx-auto px-4 py-8 md:px-8 ">
        <h2 className="text-2xl md:text-4xl font-bold">Analytics</h2>

          {/* Bar chart*/}
        <article className="h-[400px] my-4"> 
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid stroke="#717171" strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
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
        </article>
      </section>
    </section>
  );
};

export default Analytics;
