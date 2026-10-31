import { useState } from "react";
import { useTransaction } from "../hooks/useTransaction";

const ExpenseForm = () => {
  const { addExpense, CATEGORIES } = useTransaction();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      name,
      category,
      amount: Number(amount),
      desc,
    });

    setName("");
    setCategory(CATEGORIES[0]);
    setAmount("");
    setDesc("");

    closeForm();
  };

  return (
    <>
      <button
        type="button"
        onClick={openForm}
        className="mt-6 rounded-lg bg-black px-4 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-gray-700 cursor-pointer">
        + Add expense
      </button>
      {isOpen && (
        <div
          onClick={closeForm}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="expense-title"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3
                id="expense-title"
                className="text-xl font-bold text-slate-800"
              >
                Add New Expense
              </h3>

              <button
                type="button"
                onClick={closeForm}
                aria-label="Close form"
                className="rounded-lg px-3 py-1 text-2xl text-slate-500 hover:bg-slate-100"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Name*
                </label>

                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Expense name..."
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium"
                >
                  Category*
                </label>

                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-blue-500"
                >
                  {CATEGORIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div>
                <label
                  htmlFor="amount"
                  className="mb-1 block text-sm font-medium"
                >
                  Amount*
                </label>

                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0.01"
                  step="any"
                  required
                  placeholder="How much?"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Optional..."
                  rows={3}
                  className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>

              <article className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-gray-600 px-4 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-gray-700"
                >
                  Add Expense
                </button>
              </article>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpenseForm;
