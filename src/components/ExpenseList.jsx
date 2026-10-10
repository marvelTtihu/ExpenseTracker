const ExpenseList = ({ expenses = []}) => {
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
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.description}</td>
                        <td className="cursor-pointer">Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpenseList;