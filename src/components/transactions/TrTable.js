import React, { useState } from 'react';
import axios from 'axios';
import buy from '../../pics/transactionTypes/buy.png';
import sell from '../../pics/transactionTypes/sell.png';
import '../../styles/transactions/TrTable.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTransactionModal from '../dashboard/EditTransactionModal';
import RemoveTransactionByIdModal from './RemoveTransactionByIdModal';
import { CryptoState } from '../../contexts/CryptoContext';
import { numWithCommas } from '../../services/numWithCommas';
import { RateState } from '../../contexts/RateContext';

const TrTable = ({ item }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  console.log(item)

  const { symbol } = CryptoState();
  const { rate } = RateState();

  console.log(item);

  const handleOpenEditModal = () => {
    setShow(!show);
  };

  const deleteTransactionById = async (id) => {
    try {
      const res = await axios.delete('/transactions/' + id);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenRemoveTransactionById = () => {
    setShow1(!show1);
  };

  return (
    <tr className='tr-table-transaction'>
      <td className='td-transaction-detial'>
        <div className='td-transaction-detial-name'>
          <div>
            <img src={item.img.image} alt='' width={40} height={40} />
          </div>
          <div>
            <span>{item.img.name}</span>
          </div>
        </div>
      </td>
      <td className='td-transaction-detial'>
        <div className='inside-td-fix'>
          <div>
            <img
              src={item.transactionType === 'BUY' ? buy : sell}
              alt=''
              width={30}
              height={30}
            />
          </div>
          <div>
            <span className='transactiontype-tr'>{item.transactionType}</span>
            <br />
            <span className='text-dattime-color'>
              Date: {item.date} <br />
              Time: {item.time}
            </span>
          </div>
        </div>
      </td>
      <td className='td-transaction-detial'>
        {symbol}
        {symbol === '฿'
          ? numWithCommas((+item.pricePerCoin * rate).toFixed(2))
          : numWithCommas((+item.totalSpent).toFixed(2))}
      </td>
      <td className='td-transaction-detial'>
        {item.transactionType === 'BUY' ? '+' : '-'}
        {symbol}
        {symbol === '฿'
          ? numWithCommas((+item.totalSpent * rate).toFixed(2))
          : numWithCommas((+item.totalSpent).toFixed(2))}{' '}
        <br />
        <span className='amount-color-positive'>
          {item.transactionType === 'BUY' ? '+' : '-'}
          {Number(item.quanity)} {item.coinName}
        </span>
      </td>
      <td className='td-transaction-action'>
        <div className='gap'>
          <button className='edit-td-detail' onClick={handleOpenEditModal}>
            <EditIcon sx={{ color: '#BCBEC0' }} />
          </button>
          <EditTransactionModal
            onClose={handleOpenEditModal}
            show={show}
            handleOpenEditModal={handleOpenEditModal}
            item={item}
          />
          <button
            className='delete-td-detail'
            onClick={handleOpenRemoveTransactionById}
          >
            <DeleteIcon sx={{ color: '#BCBEC0' }} />
          </button>
          <RemoveTransactionByIdModal
            onClose={handleOpenRemoveTransactionById}
            show={show1}
            deleteTransactionById={deleteTransactionById}
            item={item}
            handleOpenRemoveTransactionById={handleOpenRemoveTransactionById}
          />
        </div>
      </td>
    </tr>
  );
};

export default TrTable;
