import { Route, Routes } from "react-router";
import { useState } from "react";
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar";

const App = () => {
const [expenses, setExpenses] = useState([
        {id: 1, name: "Gaji", category:"Other", type:"income", amount: 100000, description: "Gaji bulanan"},
        {id: 2, name: "Bensin", category:"Transportation", type:"expense", amount: 20000, description: "Isi full tangki"},
        {id: 3, name: "Bensin", category:"Transportation", type:"expense", amount: 20000, description: "Isi full tangki"}
    ]);

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
                    <Route path="/" element={<Home expenses={expenses} onDeleteExpense ={deleteExpense}/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;