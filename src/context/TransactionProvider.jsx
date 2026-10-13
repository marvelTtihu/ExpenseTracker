import { useState, useEffect } from "react"
import { TransactionContext } from "./TransactionContext"

export const TransactionProvider = ({children}) => {
    const [expenses, setExpenses] = useState(() => {
        const savedExpense = localStorage.getItem("expenses");
        return savedExpense ? JSON.parse(savedExpense) : [
        {id: 1, name: "Example", category: "Food & Drinks", amount: 10000, desc:"Hello there!" },
    ]
    })

    const [budgets, setBudgets] = useState(() => {
        const savedBudgets = localStorage.getItem("budgets");
        return savedBudgets ? JSON.parse(savedBudgets) : [];
    })

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
        localStorage.setItem("budgets", JSON.stringify(budgets));
    }, [expenses, budgets])
    
    const CATEGORIES = [
        "Food & Drinks",
        "Groceries",
        "Transportation",
        "Housing",
        "Health",
        "Shopping",
        "Entertainment",
        "Education",
        "Travel",
        "Bills & Subscription",
        "Gift & Donations",
        "Other"
    ];

    const setBudget = (category, limit) => {
        setBudgets((prev) => {const exists = prev.some((budget) => budget.category === category);
        return exists
        ? prev.map((budget) => budget.category === category ? {...budget, limit} : budget)
        : [...prev, {id: Date.now(), category, limit}];
        });
    }

    const deleteBudget = (id) => {
        setBudgets((prev) => prev.filter((b) => b.id !== id));
    }

    const addExpense = (newExpense) => {
        setExpenses((prev) => [...prev, newExpense]);
    }

    const editExpense = (id, updatedExpense) => {
        setExpenses((prev) => prev.map((item) => item.id === id ? {...item, ...updatedExpense} : item))
    }

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((item) => item.id !== id));
    }

    return(
        <TransactionContext value={{expenses, addExpense, editExpense, deleteExpense, budgets, setBudget, deleteBudget, CATEGORIES}}>
            {children}
        </TransactionContext>
    )
}