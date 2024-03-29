import "./Transactions.css";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MoneyOffCsredRoundedIcon from "@mui/icons-material/MoneyOffCsredRounded";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useAppContext } from "../../context/AppProvider";


const Statement = ({ item, index }) => {
    console.log('key', item);
    const {transactions, setTranscations, setExpense, setBalance, balance,expense } = useAppContext();

    const deleteStatement = (data) => {
        console.log('index', data);
        const curTransactions  = [...transactions];

        let i = curTransactions.findIndex(ele=> ele===data);
        console.log('i=>', i);
        if ( i >= 0 ) {
            if ( curTransactions[i].type === "debit" ) {
                setExpense(expense-parseFloat(curTransactions[i].amount));
                setBalance(balance+parseFloat(curTransactions[i].amount));
            } else {
                setBalance(balance-parseFloat(curTransactions[i].amount));
            }
            curTransactions.splice(i, 1);
            console.log('curTransactions', curTransactions);
            setTranscations(curTransactions);
        }

    
    }
  return (
    <div key={index} className={item.type === "credit" ? "credit" : "debit"}>
      <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{marginRight: "8px"}}>
            {item.type == "credit" ? (
              <AttachMoneyRoundedIcon />
            ) : (
              <MoneyOffCsredRoundedIcon />
            )}
          </div>
          <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
            <p style={{margin: "0"}}>{item.type === "credit" ? "credited" : item.title}</p>
            <p style={{margin: "0"}}>{item.date}</p>
          </div>
        </div>
      </div>
      <div className="action-section">
        <p>${item.amount}</p>
        <EditRoundedIcon/>
        <HighlightOffRoundedIcon onClick={()=>deleteStatement(item)}/>
      </div>
    </div>
  );
};

export default Statement;
