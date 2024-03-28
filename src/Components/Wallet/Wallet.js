import { useAppContext } from "../../context/AppProvider";
import PieGraph from "../ExpensecategoryGraph/PieGraph";
import AddExpense from "../forms/AddExpense";
import AddIncome from "../forms/AddIncome";
import "./Wallet.css";
import { useState } from "react";


const Wallet = () => {
  const [openAddIncome, setOpenaddIncome] = useState(false);
  const [openAddExpense, setOpenAddExpense] = useState(false);
  const { balance, expense } = useAppContext();

  const openIncomeForm = () => {
    setOpenaddIncome(!openAddIncome);
  };

  const openExpenseForm = () => {
    setOpenAddExpense(!openAddExpense);
  };

  const handleCancel = (data) => {
    setOpenaddIncome(false);
    setOpenAddExpense(false);
  }

  return (
    <div className="say-wallet">
      <div className="card">
        <div>
          <h3 className="say-heading">Wallet Balence : </h3>
          <p className="say-balance"> {balance}</p>
        </div>
        <div>
          <button onClick={openIncomeForm} className="say-btn">
            Add Income
          </button>
        </div>
      </div>
      <div className="card">
        <div>
          <h3 className="say-heading">Expense Balence : </h3>
          <p className="say-expense"> {expense}</p>
        </div>
        <div>
          <button onClick={openExpenseForm} className="say-btn">
            Add Expense
          </button>
        </div>
      </div>
      <div>
        <PieGraph/>
      </div>

        {openAddIncome && <AddIncome cancelIt = {handleCancel} />}
        {openAddExpense && <AddExpense cancelIt = {handleCancel} />}
    </div>
  );
};

export default Wallet;
