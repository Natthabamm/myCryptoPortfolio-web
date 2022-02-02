import React from "react";
import TransactionTable from "../components/histories/TransactionTable";
import "../styles/histories/History.css";

const History = () => {
  return (
    <div className='bg-history'>
      <div className='header-content-history'>
          <h3>Transaction History</h3>
      </div>
      <div className='footer-content-history'>
        <TransactionTable />
      </div>
    </div>
  );
};

export default History;
