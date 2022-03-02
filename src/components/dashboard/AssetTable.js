import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TransactionState } from '../../contexts/TransactionContext';
import { CryptoState } from '../../contexts/CryptoContext';
import '../../styles/dashboard/AssetTable.css';
import DataAesset from './DataAesset';

const AssetTable = () => {
  const { transaction } = TransactionState();
  const { matchCryptoName, coinList } = CryptoState();

  const tempTransaction = transaction.reduce((acc, cur) => {
    if (!coinList) return;
    if (acc[cur.coinName]) {
      acc[cur.coinName].quanity =
        Number(acc[cur.coinName].quanity) + Number(cur.quanity);
      acc[cur.coinName].totalSpent =
        Number(acc[cur.coinName].totalSpent) + Number(cur.totalSpent);
      acc[cur.coinName].avgBuy =
        (Number(acc[cur.coinName].avgBuy) + Number(cur.pricePerCoin)) / 2;
      return acc;
    }
    acc[cur.coinName] = cur;
    acc[cur.coinName].avgBuy = Number(cur.pricePerCoin);
    return acc;
  }, {});

  const transactionGroup = Object.keys(tempTransaction)
    .map(function (key) {
      return tempTransaction[key];
    })
    .map((data) => {
      const { current_price } = matchCryptoName(data.coinName);
      const profit =
        Number(data.quanity) * Number(current_price) - Number(data.totalSpent);
      const profitPercent = parseFloat((Number(profit) / Number(data.totalSpent)) * 100).toFixed(2);
      return {
        ...data,
        profit,
        profitPercent,
      };
    });

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
