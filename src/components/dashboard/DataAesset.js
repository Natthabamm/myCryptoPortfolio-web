import React, { useRef, useState } from 'react';
import '../../styles/dashboard/AssetTable.scss';
import { useDetectOutsideClick } from '../../services/useDetectOutsideClick';
import '../../styles/dashboard/MenuTooltip.css';
import MenuTooltip from './MenuTooltip';
import { CryptoState } from '../../contexts/CryptoContext';
import { numWithCommas } from '../../services/numWithCommas';
import { RateState } from '../../contexts/RateContext';

const DataAesset = ({ item }) => {
  const dropdownRef = useRef(null);

  const { symbol } = CryptoState();
  const { rate } = RateState();

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClickOpenMenuTooltip = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <tr className='assets-tr'>
        <td className='assets-td'>
          <img src={item.img.image} alt='' width={30} height={30} />
          &nbsp; {item.img.name}
        </td>
        <td className='assets-td'>
          {symbol}
          {symbol === '฿'
            ? numWithCommas((item.img.current_price * rate).toFixed(2))
            : numWithCommas(item.img.current_price.toFixed(2))}
        </td>
        <td
          className='assets-td'
          style={{
            color: `${item.img.price_change_24h > 0 ? 'green' : 'red'}`,
          }}
        >
          {item.img.price_change_24h > 0 ? (
            <i
              className='fas fa-caret-up'
              style={{ color: 'rgb(45, 156, 45)' }}
            />
          ) : (
            <i className='fas fa-caret-down' style={{ color: 'red' }} />
          )}
          &nbsp; {item.img.price_change_24h.toFixed(2)}%
        </td>
        <td className='assets-td'>
          {symbol}
          {symbol === '฿'
            ? numWithCommas(((item.quanity * item.img.current_price )* rate).toFixed(2))
            : numWithCommas((item.quanity * item.img.current_price).toFixed(2))}
          <br />
          <span className='coin-in-table'>
            {item.quanity} {item.coinName}
          </span>
        </td>
        <td className='assets-td'>
          {symbol}
          {symbol === '฿'
            ? numWithCommas((item.avgBuy * rate).toFixed(2))
            : numWithCommas(item.avgBuy.toFixed(2))}
        </td>
        <td className='assets-td'>
          {symbol}
          {symbol === '฿'
            ? numWithCommas((item.profit * rate).toFixed(2))
            : numWithCommas(item.profit.toFixed(2))}
          <br />
          {item.profitPercent > 0 ? (
            <i className='fas fa-caret-up' style={{ color: 'green' }} />
          ) : (
            <i className='fas fa-caret-down' style={{ color: 'red' }} />
          )}
          <span
            className='profit-loss'
            style={{ color: `${item.profitPercent > 0 ? 'green' : 'red'}` }}
          >
            {item.profitPercent}%
          </span>
        </td>
        <td className='assets-td'>
          <div className='btn-group-actions'>
            <button
              className='btn-edit-actions'
              onClick={handleClickOpenMenuTooltip}
            >
              <i className='fas fa-ellipsis-v' style={{ color: '#BCBEC0' }} />
            </button>
          </div>
        </td>
        <MenuTooltip
          dropdownRef={dropdownRef}
          isActive={isActive}
          item={item}
        />
      </tr>
    </>
  );
};

export default DataAesset;
