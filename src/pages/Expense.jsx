import { useState } from "react";
import { useTransaction } from "../hooks/useTransaction"
import ExpenseList from "../components/ExpenseList"

const Expense = () => {
    const[name, setName] = useState("");
    const[category, setCategory] = useState("");
    const[amount, setAmount] = useState("");
    const[desc, setDesc] = useState("");
    const{ addExpense, expenses } = useTransaction();


    const handleSubmit = (e) => {
        e.preventDefault();

        addExpense({
            id: Date.now(),
            name,
            category,
            amount: Number(amount),
            desc,
        })

        setName("");
        setCategory("");
        setAmount("");
        setDesc("");
    }

    return(
        <section className="min-h-dvh bg-slate-100">
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label>Name*</label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Expense name..."
                    /> 

                    <label>Category*</label>
                    <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required>
                        <option>Food & Dining</option>
                        <option>Groceries</option>
                        <option>Transportation</option>
                        <option>Shopping</option>
                        <option>Entertainment</option>
                    </select>

                    <label>Amount*</label>
                    <input 
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    placeholder="How much?"
                    />

                    <label>Description</label>
                    <textarea  
                    name="description"
                    id="description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="optional.."
                    />
                </form>

                <button type="submit" className="cursor-pointer">Add+</button>
            </fieldset>

        <ExpenseList expenses={expenses}/>
        </section>
    );
}

export default Expense;