import React, { useState } from 'react';
import '../../styles/dashboard/AssetTable.css';
import DataAesset from './DataAesset';

const AssetTable = () => {

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
        <DataAesset />
        <DataAesset />
      </table>
    </>
  );
};

export default AssetTable;

{/* <ConfirmDeleteModal onClose={(e) => setShow1(false)} show={show1} /> */}