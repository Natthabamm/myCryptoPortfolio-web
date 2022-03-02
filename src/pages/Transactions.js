import React from 'react'
import TransactionDetail from '../components/transactions/TransactionDetail';
import TransactionDetailTable from '../components/transactions/TransactionDetailTable';
import { TransactionState } from '../contexts/TransactionContext';
import '../styles/transactions/Transactions.css';

const Transactions = () => {
  const { transaction } = TransactionState();

  return (
    <>
      <div className='bg-transaction'>
        <div className='header-content-transaction'>
          <div className='transaction-content'>
            <TransactionDetail transaction={transaction} />
          </div>
        </div>
        <div className='section-transaction'>
          <TransactionDetailTable transaction={transaction} />
        </div>
      </div>
    </>
  )
}

export default Transactions