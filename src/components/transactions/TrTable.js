import React, { useState } from 'react';
import buy from '../../pics/transactionTypes/buy.png';
import sell from '../../pics/transactionTypes/sell.png';
import '../../styles/transactions/TrTable.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTransactionModal from '../dashboard/EditTransactionModal';
import RemoveTransactionByIdModal from './RemoveTransactionByIdModal';

const TrTable = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleOpenEditModal = () => {
    setShow(true);
  };

  const handleOpenRemoveTransactionById = () => {
    setShow1(true);
  };

  return (
    <tr className='tr-table-transaction'>
      <td className='td-transaction-detial'>
        <div className='inside-td-fix'>
          <div>
            <img src={buy} alt='' width={30} height={30} />
          </div>
          <div>
            <span className='transactiontype-tr'>BUY</span>
            <br />
            <span className='text-dattime-color'>
              Date: Jan 08,2022 <br />
              Time: 2:00 PM
            </span>
          </div>
        </div>
      </td>
      <td className='td-transaction-detial'>$196.85</td>
      <td className='td-transaction-detial'>
        +$19,685.21 <br />
        <span className='amount-color-positive'>+100 SOL</span>
      </td>
      <td className='td-transaction-action'>
        <div className='gap'>
          <button className='edit-td-detail' onClick={handleOpenEditModal}>
            <EditIcon sx={{ color: '#BCBEC0' }} />
          </button>
          <EditTransactionModal onClose={(e) => setShow(false)} show={show} />
          <button
            className='delete-td-detail'
            onClick={handleOpenRemoveTransactionById}
          >
            <DeleteIcon sx={{ color: '#BCBEC0' }} />
          </button>
          <RemoveTransactionByIdModal
            onClose={(e) => setShow1(false)}
            show={show1}
          />
        </div>
      </td>
    </tr>
  );
};

export default TrTable;
