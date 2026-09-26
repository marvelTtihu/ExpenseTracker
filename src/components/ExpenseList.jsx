const ExpenseList = ({ expenses }) => {
    return(
        <table>
            <thead>
                <th>Expense</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Action</th>
            </thead>
            <tbody>
                {expenses.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.description}</td>
                        <button className="cursor-pointer">Delete</button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpenseList;