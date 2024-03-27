import "./forms.css";

const AddIncome = ({cancelIt}) => {
    const cancelBtn = () => {
        cancelIt(false);
    }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Income</h2>
        <div className="income-form">
          <input type="number" placeholder="Income Amount" />
          <button>Add Balance</button>
          <button onClick={cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
