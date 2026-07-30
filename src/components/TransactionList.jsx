import { MdDescription } from "react-icons/md";

function TransactionList({transactions, onDeleteTransaction}) {
        return(
        <div className="bg-white p-6 rounded-2xl shadow-md h-full overflow-y-auto">
            <h3 className="text-md font-bold text-slate-700">All transactions</h3>
            <div className="mt-4">
            {transactions.length === 0 ? (
                <div className="flex items-center justify-center h-40">
                    <h4>No Transaction found.</h4>
                </div>
            ) : (
                <ul className="flex flex-col gap-y-2">
                    {transactions.map((item) => (
                        <li key={item.id} className="flex justify-between items-center px-4 py-1 bg-slate-50 border border-slate-200 rounded-xl">
                            <div className="flex flex-col">
                                <h4 className="font-semibold ">{item.title}</h4>
                                {item.desc && (
                                    <div className="flex items-center gap-1">
                                        <MdDescription size={16} color="708090"/>
                                        <p>{item.desc}</p>
                                    </div>
                                )}
                            </div>
                            <span className={item.type === "income" ? "text-green-400" : "text-red-400"}>{item.type === "income" ? "+" : "-"}Rp{item.amount}</span>
                            <button onClick={() => onDeleteTransaction(item.id)} className="cursor-pointer text-red-400">Delete</button>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
     );
}

export default TransactionList;