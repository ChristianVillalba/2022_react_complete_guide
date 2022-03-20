import { useState } from "react/cjs/react.production.min";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Hard-Coded Expenses to start the project:
const DUMMY_EXPENSES = [
{
  id: "e1",
  title: "Toilet Paper",
  amount: 94.12,
  date: new Date(2022, 7, 14),
},
{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
{
  id: "e3",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: "e4",
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12),
},
]


function App() {

  const [expense, setExpense] = useState(DUMMY_EXPENSES, setEx);

  function addExpenseHandler(expense) {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <h2>01: Set Up Project </h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
)
}

export default App;
