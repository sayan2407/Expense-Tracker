const Card = ({ balanceDetails }) => {
    console.log(balanceDetails);
  return (
    
      (balanceDetails) ? (
        <div>
        <div>
          <h3>{balanceDetails["title"]}</h3>
          <p>{balanceDetails.amount}</p>
        </div>
        <div>
          <button>Add Expense</button>
        </div>
      </div>
      ) : (
        ''
      )
    
 
  );
};

export default Card;
