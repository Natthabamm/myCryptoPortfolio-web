import React, { useState } from 'react';
import sol from '../../pics/crypto/sol.png';
import '../../styles/dashboard/AssetTable.css';
import MenuTooltip from '../specialUtils/MenuTooltip';
import EditTransactionModal from './EditTransactionModal';

const AssetTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);

  const open = Boolean(anchorEl);

  const handleClickOpenMenu1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu1 = () => {
    setAnchorEl(null);
  };

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
              <button className='btn-add-actions' onClick={() => setShow(true)}>
                <i className='fas fa-plus' style={{ color: '#BCBEC0' }} />
              </button>
              <EditTransactionModal
                onClose={(e) => setShow(false)}
                show={show}
              />
              <button
                className='btn-edit-actions'
                onClick={handleClickOpenMenu1}
              >
                <i className='fas fa-ellipsis-v' style={{ color: '#BCBEC0' }} />
              </button>
            </div>
          </td>
        </tr>
      </table>
      <MenuTooltip
        open={open}
        handleClickOpenMenu={handleClickOpenMenu1}
        anchorEl={anchorEl}
        handleCloseMenu1={handleCloseMenu1}
      />
    </>
  );
};

export default AssetTable;
