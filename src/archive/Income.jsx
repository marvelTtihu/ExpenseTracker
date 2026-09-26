const Income = ({ transactions }) => {

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-emerald-50 rounded-xl shadow-sm p-3 md:p-4 text-center">
      <h4 className="text-sm md:text-base">
        Total Income
        <span className="block text-green-400 text-xl font-bold">
          +{totalIncome.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
          })}
        </span>
      </h4>
    </div>
  );
}

export default Income;
