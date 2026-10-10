import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export const useTransaction = () => {
    const context = useContext(TransactionContext);
    
    return context;
}