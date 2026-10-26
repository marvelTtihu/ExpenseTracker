import { formatRupiah } from "../utils/format";
import { useTransaction } from "../hooks/useTransaction";
import { useState } from "react";

const ExpenseList = () => {
    const { expenses, deleteExpense, CATEGORIES } = useTransaction();
    const[selectedOptions, setSelectedOptions] = useState("");

    const filteredExpense = selectedOptions === ""
        ? expenses
        : expenses.filter(item => item.category === selectedOptions)

    return(
        <div>
            <select
            id="categoryFilter"
            value={selectedOptions}
            onChange={(e) => setSelectedOptions(e.target.value)}
            >
            <option value="">All categories</option>
            {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpense.length === 0 ? (
                        <p className="text-slate-500">
                            No expenses yet. 
                        </p>
                    ) : (
                        filteredExpense.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{formatRupiah(item.amount)}</td>
                                <td>{item.desc}</td>
                                <td className="cursor-pointer" onClick={() => deleteExpense(item.id)}>Delete</td>
                            </tr>
                        ))   
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseList;