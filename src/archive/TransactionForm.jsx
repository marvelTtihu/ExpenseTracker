import { useState } from 'react'

const TransactionForm = ({ onAddTransactions }) => {
    const[title, setTitle] = useState("");
    const[type, setType] = useState("income");
    const[amount, setAmount] = useState("");
    const[desc, setDesc] = useState("");

    const handleTransactions = (e) => {
        e.preventDefault();

        // Ini untuk pengecekan kalau semua variabel ini semua missing maka akan direturn atau kosong
        if([title, type, amount].some(val => !val)) return;

        // Setelah itu, kalau semua variabel true, dia akan menjadi sebuah array, dan akan ditampilkan di history list
        onAddTransactions({
            id: Date.now(),
            title,
            type,
            amount: Number(amount),
            desc
        })

        // Dan ini untuk reset formnya setelah submit
        setTitle("");
        setType("income");
        setAmount("");
        setDesc("")
    }

    return(
        <form onSubmit={handleTransactions} className='bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto w-full flex flex-col gap-y-4'>
            <h4 className='text-md font-bold text-slate-700'>Add new transactions</h4>
            <div className='flex flex-col gap-y-1'>
                <label className='text-sm font-md text-slate-700' htmlFor="title">Title*</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Transaction title, e.g., Milk'
                    required
                    className='w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-1 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
            />
            </div>

            <div className='flex flex-col gap-y-1'>
                <label className="text-sm font-md text-slate-700" htmlFor='amount'>Amount*</label>
                <input 
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='e.g., 10000'
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-1 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'"
                />
            </div>

                <div className="flex flex-col gap-y-1">
                <span>Type</span>

                <div className="flex gap-2">
                    <label className="w-full cursor-pointer">
                    <input
                        type="radio"
                        name="type"
                        value="income"
                        checked={type === "income"}
                        onChange={(e) => setType(e.target.value)}
                        className="sr-only peer"
                    />

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center transition peer-checked:border-green-500 peer-checked:bg-green-100 peer-checked:text-green-700">
                        Income
                    </div>
                    </label>

                    <label className="w-full cursor-pointer">
                    <input
                        type="radio"
                        name="type"
                        value="expense"
                        checked={type === "expense"}
                        onChange={(e) => setType(e.target.value)}
                        className="sr-only peer"
                    />
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center transition peer-checked:border-red-500 peer-checked:bg-red-100 peer-checked:text-red-700">
                        Expense
                    </div>
                    </label>
                </div>
                </div>

            <div className='flex flex-col gap-y-2'>
                <label htmlFor="desc">Description</label>
                <textarea 
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder='About your transaction... (Optional)'
                    className='w-full rounded-xl border border-slate-200 bg-slate-50 resize-none p-2 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                />
            </div>

            <button type='submit' className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-1 px-4'>Add+</button>
        </form>
    );
}

export default TransactionForm;