import type { Expense } from "../types/Expense";

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

function ExpenseList({ expenses, onDeleteExpense }: ExpenseListProps) {
  return (
    <div className="expense-list-card">
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p className="no-expenses">No Expenses Found</p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <div className="expense-item" key={expense.id}>
              <div className="expense-info">
                <h3>{expense.description}</h3>

                <p>
                  <strong>Category:</strong> {expense.category}
                </p>

                <p>
                  <strong>Amount:</strong> ₹{expense.amount.toFixed(2)}
                </p>

                <p>
                  <strong>Date:</strong> {expense.date}
                </p>
              </div>

              <button
                type="button"
                className="delete-button"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
