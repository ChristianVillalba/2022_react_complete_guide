import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  
  return (
    <div className="new-expense">
      <form>
      <ExpenseForm />
      </form>
    </div>
  );
}

export default NewExpense;