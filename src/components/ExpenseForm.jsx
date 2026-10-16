import { useState } from "react";
import { useTransaction } from "../hooks/useTransaction";

const ExpenseForm = () => {
    const {addExpense, CATEGORIES} = useTransaction();
    
    const[name, setName] = useState("");
    const[category, setCategory] = useState(CATEGORIES[0]);
    const[amount, setAmount] = useState("");
    const[desc, setDesc] = useState("");


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
        setCategory(CATEGORIES[0]);
        setAmount("");
        setDesc("");
    }

    return(
        <>
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
                        {CATEGORIES.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
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
                <button type="submit" className="cursor-pointer">Add+</button>
                </form>
            </fieldset>
        </>
    )
}

export default ExpenseForm;