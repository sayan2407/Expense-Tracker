import { useState } from "react";
import { useAppContext } from "../../context/AppProvider";
import "./forms.css";

const AddIncome = ({cancelIt}) => {
  const {balance,setBalance, transactions, setTranscations, } = useAppContext();
  const [ price, setPrice ] = useState('');

    const cancelBtn = () => {
        cancelIt(false);
    }

    const addIncome = () => {
      const currentDate = new Date().toLocaleDateString();
      const status = {
        type: "credit",
        amount: price,
        date: currentDate
      };
      const curTransactions = [...transactions];
      curTransactions.push(status); 
      setTranscations(curTransactions);
      setBalance(balance + parseFloat(price));
      cancelIt(false);
    }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Income</h2>
        <div className="income-form">
          <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="Income Amount" />
          <button onClick={addIncome}>Add Balance</button>
          <button onClick={cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
