import "./Page.css";
import Wallet from '../Components/Wallet/Wallet'
import Transcations from '../Components/Transactions/Transcations'
import BarGraph from '../Components/ExpensecategoryGraph/BarGraph'
import { useEffect } from "react";

const HomePage = () => {

  useEffect(()=>{

    let account = localStorage.getItem('expenses');

    if (account === null) {
      const account_balance = {
        balance: 5000,
        expense: 0,
        transactions: [],
        credit: [],
        debit: []
      }

      localStorage.setItem('expenses',JSON.stringify(account_balance));
    } else {
      account = JSON.parse(account);
      // console.log(account);
    }

  }, []);

  return (
    <div>
        <Wallet/>
        <div className='say-section'>
          <Transcations/>
          <BarGraph/>
        </div>
    </div>

  )
}

export default HomePage