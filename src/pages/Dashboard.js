import React, { useEffect, useState } from 'react';
import CryptoCard from '../components/dashboard/CryptoCard';
import '../styles/dashboard/Dashboard.css';
import { CryptoState } from '../contexts/CryptoContext';
import Modal from '../components/utils/Modal';
import AssetTable from '../components/dashboard/AssetTable';
import axios from 'axios';
import Statistic from '../components/dashboard/info/Statistic';
import DoughnutChart from '../components/dashboard/info/DoughnutChart'
import BlankAsset from '../components/dashboard/info/BlankAsset';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { symbol } = CryptoState();

  const fetchTransactionById = async (transactionId) => {
    try {
      const res = await axios.get(`/transactions/${transactionId}`);
      const result = res.data.transactions;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTransactionById();
  }, []);

  return (
    <div className='bg-dashboard'>
      <div className='main-content'>
        <div className='head-main'>
          <div className='left-inside-main'>
            <h5>Current Balance</h5>
            <div className='balance-main'>
              <h2>{symbol}0</h2>
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
            <div className='tabs'>
              <input type='radio' id='radio-1' name='tabs' checked />
              <label className='tab' for='radio-1'>
                Pie Chart
              </label>
              <input type='radio' id='radio-2' name='tabs' />
              <label className='tab' for='radio-2'>
                Statistic
              </label>
              <span className='gilder'></span>
            </div>
          </div>
        </div>
        <div className='center-main'>
          <div className='content-center-main'>
            {/* <Statistic /> */}
            {/* <DoughnutChart /> */}
            <BlankAsset setShow={setShow} />
          </div>
        </div>
        <div className='footer-main'>
          <AssetTable />
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
