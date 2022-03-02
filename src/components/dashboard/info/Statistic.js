import React from 'react';
import { CryptoState } from '../../../contexts/CryptoContext';
import { numWithCommas } from '../../../services/numWithCommas';
import '../../../styles/dashboard/Statistic.css';

const Statistic = ({ transactionGroup }) => {
  const { symbol } = CryptoState();

  const sortedTransactionByProfit = transactionGroup.sort((a, b) => {
    return a.quanity * a.img.current_price - b.quanity * b.img.current_price;
  });
  const profitData =
    sortedTransactionByProfit[sortedTransactionByProfit.length - 1];
  const worstData = sortedTransactionByProfit[0];
  return (
    <div className='state'>
      <div className='group-best'>
        <div className='coin-img'>
          <img src={profitData.img.image} alt='' width={35} height={35} />
        </div>
        <div>
          <span className='span-best'>Best Performer</span>
          <div>
            {profitData.profitPercent > 0 ? (
              <i className='fas fa-caret-up' style={{ color: 'green' }} />
            ) : (
              <i className='fas fa-caret-down' style={{ color: 'red' }} />
            )}
            <span style={{ color: `${profitData.profitPercent > 0 ? 'green' : 'red'}` }}>
            {profitData.profitPercent}%
            </span>
            ({symbol}
            {numWithCommas(
              (profitData.quanity * profitData.img.current_price).toFixed(2)
            )}
            )
          </div>
        </div>
      </div>
      <div className='group-worst'>
        <div className='coin-img'>
          <img src={worstData.img.image} alt='' width={35} height={35} />
        </div>
        <div className='div-worst'>
          <span className='span-best'>Worst Performer</span>
          <div>
            {worstData.profitPercent > 0 ? (
              <i className='fas fa-caret-up' style={{ color: 'green' }} />
            ) : (
              <i className='fas fa-caret-down' style={{ color: 'red' }} />
            )}
            <span style={{ color: `${worstData.profitPercent > 0 ? 'green' : 'red'}` }}>
            {worstData.profitPercent}%
            </span>
            ({symbol}
            {numWithCommas(
              (worstData.quanity * worstData.img.current_price).toFixed(2)
            )}
            )
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
