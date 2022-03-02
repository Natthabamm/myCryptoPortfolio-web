import React from 'react';
import TrTable from './TrTable';
import '../../styles/transactions/TransactionDetailTable.css';

const TransactionDetailTable = ({ transaction }) => {

  console.log(transaction)

  return (
    <table className='transaction-detail-table' style={{ color: 'white' }}>
      <tr className='transaction-detail-head'>
        
        <th style={{ width: '20%' }}>Name</th>
        <th style={{ width: '20%' }}>Type</th>
        <th style={{ width: '15%' }}>Price</th>
        <th style={{ width: '15%' }}>Amount</th>
        <th style={{ width: '20%' }}>Actions</th>
      </tr>
      {transaction.map((item) => {
        return <TrTable item={item} />;
      })}
    </table>
  );
};

export default TransactionDetailTable;
