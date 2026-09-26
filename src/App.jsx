import { Route, Routes } from "react-router";
import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


const App = () => {
const [expenses, setExpenses] = useState([
        {id: 1, name: "Gaji", category:"Other", type:"income", amount: 100000, description: "Gaji bulanan"},
        {id: 2, name: "Bensin", category:"Transportation", type:"expense", amount: 20000, description: "Isi full tangki"},
        {id: 3, name: "Air Minum", category:"Food and Drinks", type:"expense", amount: 5000, description: "Isi full tangki"}
    ]);

    // Ini otomatis menyinkronkan data yang berubah ke localStorage
    // useEffect(() => {
    //     localStorage.setItem("user-expenses", JSON.stringify(expenses))
    // }, [expenses]

    // const editExpense = (id, updatedExpense) => {
    //     setExpenses((prev) => prev.map((item) => updatedExpense.id === id ? {...item, ...updatedExpense} : item))
    // }

    const addExpense = (newExpense) => {
        setExpenses((prev) => [...prev, newExpense]);
    }

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((item) => item.id !== id));
    }

    return(
        <div className="flex">
                <Sidebar />

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home expenses={expenses} />}/>
                    <Route path="/expenseform" element={<ExpenseForm onAddExpense={addExpense} />}/>
                    <Route path="/expenseList" element={<ExpenseList onDeleteExpense={deleteExpense}/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;