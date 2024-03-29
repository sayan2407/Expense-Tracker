// import Transcations from './Transcations';
import { useAppContext } from "../../context/AppProvider";
import Statement from "./Statement";
import "./Transactions.css";
import { Pagination } from '@mui/material';
import { useState } from "react";


const Transcations = () => {
  const {transactions} = useAppContext();
  const [page, setPage] = useState(1);
  const transactionsPerPage = 3;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const indexOfLastTransaction = page * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  return (
    <div className="say-transactions">
        <h2 className='say-heading'>Recent Transcations</h2>
        {
          (transactions.length) ? (
            <div className="recent-transactions">

            {
              currentTransactions.map((item, index) => {
                return <Statement item={item} key={index}/>
              })
            }
    <Pagination
          count={Math.ceil(transactions.length / transactionsPerPage)}
          page={page}
          onChange={handleChangePage}
        />
          </div>
          ) : (
            <h3>No Transactions Found</h3>
          )
        }
      
      
    </div>
  )
}

export default Transcations