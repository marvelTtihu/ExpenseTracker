const Balance = ({ transactions }) => {
  const balance = transactions.reduce((acc, item) => {
    // Menggunakan ternary operator, kalau item.typenya sama dengan income, berarti tinggal di tambah, kalau enggak dikurangi
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 text-center">
      <h4 className="text-sm md:text-base">
        Total Balance
        <span className="block font-bold text-lg md:text-xl">
          {balance.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </span>
      </h4>
    </div>
  );
};

export default Balance;
