import { useTransaction } from "../hooks/useTransaction"
import ExpenseList from "../components/ExpenseList"
import ExpenseForm from "../components/ExpenseForm";

const Expense = () => {
    const{ expenses } = useTransaction();

    return(
        <section className="min-h-dvh bg-slate-100">
            <section className="max-w-5xl mx-auto px-4 py-8 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold">Expense</h2>
            <ExpenseForm />

                <article>
                    <ExpenseList expenses={expenses}/>
                </article>
            </section>
        </section>
    );
}

export default Expense;