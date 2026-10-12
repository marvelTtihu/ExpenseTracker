import { formatRupiah } from "../utils/format";
import { useTransaction } from "../hooks/useTransaction";

const ExpenseList = ({ expenses = []}) => {
    const { deleteExpense } = useTransaction();

    return(
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{formatRupiah(item.amount)}</td>
                        <td>{item.description}</td>
                        <td className="cursor-pointer" onClick={() => deleteExpense(item.id)}>Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpenseList;