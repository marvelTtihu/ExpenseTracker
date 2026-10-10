import { useState } from "react"
import { TransactionContext } from "./TransactionContext"

export const TransactionProvider = ({children}) => {
    const [expenses, setExpenses] = useState([
        {id: 1, name: "Gaji", category:"Salary", type:"income", amount: 100000, description: "Gaji bulanan"},
        {id: 2, name: "Bensin", category:"Transportation", type:"expense", amount: 20000, description: "Isi full tangki"},
        {id: 3, name: "Air Minum", category:"Food and Drinks", type:"expense", amount: 5000, description: "Haus"},
        {id: 4, name:"Mie gacoan", category:"Food and Drinks", type:"expense", amount: 12000, description: "Kenyang"},
        {id: 5, name:"Ayam goreng", category:"Food and Drinks", type:"expense", amount: 15000, description: "Kenyang"},
    ])

    const addExpense = (newExpense) => {
        setExpenses((prev) => [...prev, newExpense]);
    }

    const editExpense = (id, updatedExpense) => {
        setExpenses((prev) => prev.map((item) => updatedExpense.id === id ? {...item, ...updatedExpense} : item))
    }

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((item) => item.id !== id));
    }

    return(
        <TransactionContext value={{expenses, addExpense, editExpense, deleteExpense}}>
            {children}
        </TransactionContext>
    )
}