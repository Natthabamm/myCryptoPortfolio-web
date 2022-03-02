import React from 'react';
import { TransactionState } from '../../contexts/TransactionContext';
// import { CryptoState } from '../../contexts/CryptoContext';
import '../../styles/dashboard/AssetTable.scss';
import DataAesset from './DataAesset';

const AssetTable = () => {
  const { transactionGroup } = TransactionState();

  return (
    <>
      <h5 className='assets-h5'>Your Assets</h5>
      <table className='assets-table'>
        <tr className='assets-tr-head'>
          <th className='assets-th'>Name</th>
          <th className='assets-th'>Price</th>
          <th className='assets-th'>24H</th>
          <th className='assets-th'>Holdings</th>
          <th className='assets-th'>Avg.BuyPrice</th>
          <th className='assets-th'>Profit/Loss</th>
          <th className='assets-th'>Actions</th>
        </tr>
        {transactionGroup.map((item) => {
          return <DataAesset item={item} />;
        })}
      </table>
    </>
  );
};

export default AssetTable;
