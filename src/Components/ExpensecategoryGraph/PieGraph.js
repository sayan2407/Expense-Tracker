import { PieChart } from '@mui/x-charts/PieChart';
import {useEffect, useState} from 'react';
import { useAppContext } from '../../context/AppProvider';


const PieGraph = () => {
  const {transactions} = useAppContext();
  const [ data, setData ] = useState([]);
  // const data = [
  //   { id: 0, value: 10, label: 'series A' },
  //   { id: 1, value: 15, label: 'series B' },
  //   { id: 2, value: 20, label: 'series C' },
  // ];
  useEffect(()=>{
    const fetchExpenseCat = () => {
      const curData = [];
      transactions.map((item, index)=> {
        if ( item.type === "debit" ) {
          let findIndex = curData.findIndex(ele =>ele.label === item.category);
          console.log('findIndex ', findIndex);
          if ( findIndex >= 0 ) {
            curData[findIndex].value += item.amount;
          } else {
            curData.push({
              id: index,
              value: item.amount,
              label: item.category
            })
          }
         
        }
      
      })
      setData(curData);
    }
    fetchExpenseCat();


  }, [transactions])

  return (
    (data.length) ? (
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />  
    ) : (
      <p>No Expense Found</p>
    )

  
  )
}

export default PieGraph;

