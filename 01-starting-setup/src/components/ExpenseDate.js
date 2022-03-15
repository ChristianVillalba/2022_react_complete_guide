import "./ExpenseDate.css";

function ExpenseDate(props) {
    const day = props.date.toLocaleString("en-UK", {day: "numeric"});
    const month = props.date.toLocaleString("en-UK", {month: "long"});
    const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
