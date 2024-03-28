import "./forms.css";
import cancelIt from "../Wallet/Wallet";
import { useState } from "react";
import { useAppContext } from "../../context/AppProvider";

const AddExpense = ({ cancelIt }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const {balance,setBalance, transactions, setTranscations, expense, setExpense } = useAppContext();

  const cancelBtn = () => {
    cancelIt(false);
  };

  const addExpense = () => {
    if ( price > balance ) {
      return;
    }
    setBalance(balance-parseFloat(price));
    setExpense(expense+parseFloat(price));
    const status = {
      type: "debit",
      title : title,
      amount: price,
      date: date,
      category: category,
    };
    const curTransactions = [...transactions];
    curTransactions.push(status); 
    setTranscations(curTransactions);
    cancelIt(false);

  }
  return (
    <div className="modal-overlay">
      <div className="expense-form modal">
        <h2>Add Expenses</h2>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
        </div>
        <div>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="category"
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>
        <div>
          <button onClick={addExpense}>Add Expense</button>
          <button onClick={cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
