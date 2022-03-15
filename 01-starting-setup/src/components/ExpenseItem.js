import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>2022/03/10</div>
      <div className="expense-item__description">
        <h2>Phone Bill</h2>
        <div className="expense-item__price">£18.21</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
