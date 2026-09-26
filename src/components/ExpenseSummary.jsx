const ExpenseSummary = ({ expenses }) => {
  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);
  
  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <section>
      <article className="grid grid-cols-1 md:grid-cols-2">
        <article>
          <h2>Your balance</h2>
          <span>{totalBalance}</span>
        </article>

        <article>
          <h2>Expense</h2>
          <span>{totalExpense}</span>
        </article>
      </article>
    </section>
  );
}

export default ExpenseSummary;
