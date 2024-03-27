import "./forms.css";
import cancelIt from "../Wallet/Wallet";

const AddExpense = ({cancelIt}) => {
    const cancelBtn = () => {
        cancelIt(false);
    }
  return (
    <div className="modal-overlay">
      <div className="expense-form modal">
        <h2>Add Expenses</h2>
        <div>
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Price" />
        </div>
        <div>
          <input type="text" placeholder="category" />
          <input type="date" />
        </div>
        <div>
          <button>Add Expense</button>
          <button onClick={cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
