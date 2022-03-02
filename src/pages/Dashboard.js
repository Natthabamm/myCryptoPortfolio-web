import React, { useEffect, useState } from 'react';
import CryptoCard from '../components/dashboard/CryptoCard';
import '../styles/dashboard/Dashboard.scss';
import { CryptoState } from '../contexts/CryptoContext';
import Modal from '../components/utils/Modal';
import AssetTable from '../components/dashboard/AssetTable';
// import axios from 'axios';
import Statistic from '../components/dashboard/info/Statistic';
import DoughnutChart from '../components/dashboard/info/DoughnutChart';
import BlankAsset from '../components/dashboard/info/BlankAsset';
import { TransactionState } from '../contexts/TransactionContext';
import { numWithCommas } from '../services/numWithCommas';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [isShowDoughnut, setIsShowDougnut] = useState(true);
  const { symbol, matchCryptoName, coinList } = CryptoState();
  const { transaction } = TransactionState();

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
      const profitPercent = parseFloat(
        (Number(profit) / Number(data.totalSpent)) * 100
      ).toFixed(2);
      return {
        ...data,
        profit,
        profitPercent,
      };
    });

  const currentBalance = transactionGroup.reduce((acc, cur) => {
    return acc + Number(cur.quanity) * Number(cur.img.current_price);
  }, 0);

  return (
    <div className='bg-dashboard'>
      <div className='main-content'>
        <div className='head-main'>
          <div className='left-inside-main'>
            <h5>Current Balance</h5>
            <div className='balance-main'>
              <h2>
                {symbol}
                {numWithCommas(currentBalance.toFixed(2))}
              </h2>
              <div className='percent-inside-balance'>--%</div>
            </div>
            <div className='percent-main'>
              +{symbol}0<div className='time-inside-percent'>(24H)</div>
            </div>
          </div>
          <div className='right-inside-main'>
            <button className='add-new' onClick={() => setShow(true)}>
              <i className='fas fa-plus-circle' style={{ color: 'white' }} />
              Add New
            </button>
          </div>
        </div>

        <div className='btn-group-select-chart'>
          <div className='container'>
            <div className='tabs-d'>
              <input
                type='radio'
                id='radio-d'
                name='tabs'
                value='doughnutchart'
                onClick={() => setIsShowDougnut(true)}
              />
              <label className='tabb' for='radio-d'>
                Doughnut Chart
              </label>
              <input
                type='radio'
                id='radio-b'
                name='tabs'
                value='statistic'
                onClick={() => setIsShowDougnut(false)}
              />
              <label className='tabbb' for='radio-b'>
                Statistic
              </label>
              <span className='gilder-1'></span>
            </div>
          </div>
        </div>
        <div className='center-main'>
          <div className='content-center-main'>
            {transaction.length >= 1 ? (
              isShowDoughnut === true ? (
                <DoughnutChart transactionGroup={transactionGroup}/>
              ) : (
                <Statistic transactionGroup={transactionGroup}/>
              )
            ) : (
              <BlankAsset setShow={setShow} />
            )}
          </div>
        </div>
        <div className='footer-main'>
          {transaction.length >= 1 ? <AssetTable /> : <></>}
        </div>
      </div>
      <div className='card-content'>
        <div className='merket-trend'>Market trend</div>
        <CryptoCard />
      </div>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
};

export default Dashboard;
