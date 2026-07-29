import "./App.css"
import Header  from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import Income from "./components/Income.jsx";
import Expense from "./components/Expense.jsx";
import TransactionForm from "./components/TransactionForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import { useState, useEffect } from "react"

function App() {
    //  lazy initialization dari localStorage
    const[transactions, setTransactions] = useState(() => {
        const savedData = localStorage.getItem("user-transactions");
        return savedData ? JSON.parse(savedData) : [];
    });

    // Ini otomatis menyinkronkan data yang berubah ke localStorage
    useEffect(() => {
        localStorage.setItem("user-transactions", JSON.stringify(transactions))
    }, [transactions])

    // Logic untuk transaction yang baru
    const addTransactions = (newTransactions) => {
        setTransactions((prev) => [...prev, newTransactions]);
    };

    // Logic untuk menghapus transactions
    const deleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((item) => item.id !== id))
    }

   return(  
    <div className="min-h-dvh bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-8 md:px-8 lg:px-0">
            <Header />
            <div className="mt-10 space-y-8">

                {/* Balance, Income, Expense */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                        <Balance transactions={transactions} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:col-span-2">
                        <Income transactions={transactions} />
                        <Expense transactions={transactions} />
                    </div>
                </div>

                {/* Form and List */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="order-2 md:order-1">
                        <TransactionForm onAddTransactions={addTransactions} />
                    </div>
                    <div className="order-1 md:order-2">
                        <TransactionList
                            transactions={transactions}
                            onDeleteTransaction={deleteTransaction}
                        />
                    </div>
                </div>
            </div>  
        </div>
    </div>
   );
}

export default App;