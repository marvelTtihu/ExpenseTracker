function Expense({ transactions }) {
  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-red-50 rounded-xl shadow-sm p-3 md:p-4 text-center">
      <h4 className="text-sm md:text-base">
        Total Expense
        <span className="block text-red-400 text-xl font-bold">
          -{totalExpense.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </span>
      </h4>
    </div>
  );
}

export default Expense;
