interface SummaryCardProps {
  totalExpenses: number;
  numberOfExpenses: number;
  highestExpense: number;
}

function SummaryCard({
  totalExpenses,
  numberOfExpenses,
  highestExpense,
}: SummaryCardProps) {
  return (
    <div className="summary-section">
      <div className="summary-card">
        <h3>Total Expenses</h3>

        <p>₹{totalExpenses.toFixed(2)}</p>
      </div>

      <div className="summary-card">
        <h3>Number of Expenses</h3>

        <p>{numberOfExpenses}</p>
      </div>

      <div className="summary-card">
        <h3>Highest Expense</h3>

        <p>₹{highestExpense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default SummaryCard;
