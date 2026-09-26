import ExpenseSummary from "../components/ExpenseSummary.jsx";
import ExpenseList from "../components/ExpenseList.jsx";


const Home = ({expenses}) => {

    // Ini otomatis menyinkronkan data yang berubah ke localStorage
    // useEffect(() => {
    //     localStorage.setItem("user-expenses", JSON.stringify(expenses))
    // }, [expenses]

    // const editExpense = (id, updatedExpense) => {
    //     setExpenses((prev) => prev.map((item) => updatedExpense.id === id ? {...item, ...updatedExpense} : item))
    // }

return(  
    <section className="min-h-dvh bg-slate-100">
        <section className="max-w-5xl mx-auto px-4 py-8 md:px-8 lg:px-0">
        <h2 className="text-2xl md:text-4xl font-bold">Dashboard</h2>

            <section className="mt-10 space-y-8">
                {/* Expense Summary */}
                <article className="bg-white p-4">
                    <article className="flex justify-between items-center px-4">
                        <h3>Summary</h3>
                        <button>+ Add</button>
                    </article>
                    <ExpenseSummary expenses={expenses} />
                </article>
                
                {/* Recent Expenses */}
                <article>
                    <h2>Recent Expenses</h2>
                    <ExpenseList expenses={expenses.slice(0, 3)}/>
                </article>
            </section>  
        </section>
    </section>
   );
}

export default Home;