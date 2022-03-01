import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import dot from '../../pics/crypto/dot.png';
import '../../styles/transactions/TransactionDetail.css';

const TransactionDetail = () => {
  return (
    <>
      <div className='box-transaction'>
        <div className='back-btn-div'>
          <button className='back-btn'>
            <ArrowBackIosIcon
              sx={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
            />
            Back
          </button>
        </div>
        <div className='heading-detail'>
          <span>Transaction Details</span>
        </div>
        <div className='detail-inside'>
          <span className='coinname-span'>Solana SOL Balance</span>
          <div className='price-transaction'>
            <img src={dot} height={30} width={30} />
            <span className='price-span'>$14,481.43</span>
            <div className='percent-transaction-positive'>
              <ArrowDropUpIcon sx={{ color: '#30BB78' }} />
              7.66%
            </div>
          </div>
        </div>
        <div className='lower-content-transaction'>
          <div className='box1'>
            <span className='text1'>Quanity</span>
            <span className='text2'>100 SOL</span>
          </div>
          <div className='box2'>
            <span className='text1'>Avg. Buy Price</span>
            <span className='text2'>$195.85</span>
          </div>
          <div className='box3'>
            <span className='text1'>Total Profit/Loss</span>
            <span className='text3-negative'>
                <ArrowDropDownIcon sx={{ color: '#e72d04' }} />
                26.80% (-5,274.97)
                </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetail;
