import React, { useRef, useState } from 'react';
import '../../styles/dashboard/AssetTable.css';
import { useDetectOutsideClick } from '../../services/useDetectOutsideClick';
import '../../styles/dashboard/MenuTooltip.css';
import sol from '../../pics/crypto/sol.png';
import MenuTooltip from './MenuTooltip';

const DataAesset = () => {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClickOpenMenuTooltip = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <tr className='assets-tr'>
        <td className='assets-td'>
          <img src={sol} alt='' width={30} height={30} />
          &nbsp; Solana
        </td>
        <td className='assets-td'>$144.16</td>
        <td className='assets-td' style={{ color: 'red' }}>
          <i className='fas fa-caret-down' style={{ color: 'red' }} />
          {/* <i className="fas fa-caret-up" style={{ color: 'rgb(45, 156, 45)' }} /> */}
          &nbsp; 2.07%
        </td>
        <td className='assets-td'>
          +$19,685.21 <br />
          <span className='coin-in-table'>100 SOL</span>
        </td>
        <td className='assets-td'>$196.85</td>
        <td className='assets-td'>
          -$5,274.97
          <br />
          <i className='fas fa-caret-down' style={{ color: 'red' }} />
          <span className='profit-loss' style={{ color: 'red' }}>
            26.80%
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
        <MenuTooltip dropdownRef={dropdownRef} isActive={isActive} />
      </tr>
    </>
  );
};

export default DataAesset;
