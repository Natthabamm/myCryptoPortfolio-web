import React from 'react'
import TransactionDetail from '../components/transactions/TransactionDetail';
import TransactionDetailTable from '../components/transactions/TransactionDetailTable';
import '../styles/transactions/Transactions.css';

const Transactions = () => {
  return (
    <>
      <div className='bg-transaction'>
        <div className='header-content-transaction'>
          <div className='transaction-content'>
            <TransactionDetail />
          </div>
        </div>
        <div className='section-transaction'>
          <TransactionDetailTable />
        </div>
      </div>
    </>
  )
}

export default Transactions