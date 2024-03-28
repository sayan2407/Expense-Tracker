import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [ balance, setBalance ] = useState(5000);
    const [ expense, setExpense ] = useState(0);
    const [ transactions, setTranscations ] = useState([]);


    return (
        <AppContext.Provider
        value={{
            balance,
            setBalance,
            expense,
            setExpense,
            transactions,
            setTranscations
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if ( !context ) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}