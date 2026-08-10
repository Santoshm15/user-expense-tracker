import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type { Expense } from "../types/Expense";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [description, setDescription] = useState<string>("");

  const [category, setCategory] = useState<string>("");

  const [amount, setAmount] = useState<string>("");

  const [date, setDate] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newExpense: Expense = {
      id: Date.now(),
      description: description.trim(),
      category: category,
      amount: Number(amount),
      date: date,
    };

    onAddExpense(newExpense);

    // Clear the form after adding
    setDescription("");
    setCategory("");
    setAmount("");
    setDate("");

    // Success popup
    alert("Expense added successfully!");
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div className="expense-form-card">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        {/* Description */}

        <div className="form-group">
          <label htmlFor="description">Description</label>

          <input
            id="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description"
            required
          />
        </div>

        {/* Category */}

        <div className="form-group">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select category</option>

            <option value="Food">Food</option>

            <option value="Travel">Travel</option>

            <option value="Shopping">Shopping</option>

            <option value="Bills">Bills</option>

            <option value="Entertainment">Entertainment</option>

            <option value="Other">Other</option>
          </select>
        </div>

        {/* Amount */}

        <div className="form-group">
          <label htmlFor="amount">Amount</label>

          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            min="0.01"
            step="0.01"
            required
          />
        </div>

        {/* Date */}

        <div className="form-group">
          <label htmlFor="date">Date</label>

          <input
            id="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        {/* Add Button */}

        <button type="submit" className="add-expense-button">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
