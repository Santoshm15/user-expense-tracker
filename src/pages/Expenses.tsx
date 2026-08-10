import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";

import type { Expense } from "../types/Expense";

function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const addExpense = (expense: Expense) => {
    setExpenses((previousExpenses) => [...previousExpenses, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((previousExpenses) =>
      previousExpenses.filter((expense) => expense.id !== id),
    );
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredExpenses = useMemo(() => {
    if (selectedCategory === "All") {
      return expenses;
    }

    return expenses.filter((expense) => expense.category === selectedCategory);
  }, [expenses, selectedCategory]);

  const totalExpenses = useMemo(() => {
    return filteredExpenses.reduce(
      (total, expense) => total + expense.amount,
      0,
    );
  }, [filteredExpenses]);

  const highestExpense = useMemo(() => {
    if (filteredExpenses.length === 0) {
      return 0;
    }

    return Math.max(...filteredExpenses.map((expense) => expense.amount));
  }, [filteredExpenses]);

  return (
    <div className="expenses-page">
      <div className="expenses-container">
        <div className="expense-page-header">
          <h1>Expense Tracker</h1>

          <p>Track and manage your expenses.</p>
        </div>

        <ExpenseForm onAddExpense={addExpense} />

        <div className="expense-filter-section">
          <label htmlFor="category-filter">Filter by Category</label>

          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>

            <option value="Food">Food</option>

            <option value="Travel">Travel</option>

            <option value="Shopping">Shopping</option>

            <option value="Bills">Bills</option>

            <option value="Entertainment">Entertainment</option>

            <option value="Other">Other</option>
          </select>
        </div>

        <SummaryCard
          totalExpenses={totalExpenses}
          numberOfExpenses={filteredExpenses.length}
          highestExpense={highestExpense}
        />

        <ExpenseList
          expenses={filteredExpenses}
          onDeleteExpense={deleteExpense}
        />
      </div>
    </div>
  );
}

export default Expenses;
