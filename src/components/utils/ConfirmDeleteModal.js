import React from 'react';
import { TransactionState } from '../../contexts/TransactionContext';
import '../../styles/utils/ConfirmDeleteModal.css';

const ConfirmDeleteModal = ({ show1, deleteTransactionById, item, handleOpenDeleteModal }) => {
  if (!show1) return null;
  
  const { fetchAlltransactions } = TransactionState();

  const handleClickDeleteTransaction = async e => {
    deleteTransactionById(item.id)
    await fetchAlltransactions()
    handleOpenDeleteModal()
  }

  return (
    <div className='modal-cf' role='button' onClick={handleOpenDeleteModal}>
      <div className='modal-content-cf' onClick={(e) => e.stopPropagation()}>
        <div className='div-in-modal-cf'>
          <h5 className='h5-in-modal-cf'>Remove assets</h5>
          <span onClick={handleOpenDeleteModal}>
            <i className='fas fa-times' style={{ color: 'white' }} />
          </span>
        </div>
        <div className='modal-body-cf'>
          <div className='text-cf'>Are you sure you want to remove this coin? Any transactions associated with this coin will also be removed.</div>
          <button className='remove-btn' onClick={handleClickDeleteTransaction}>Remove</button>
          <button className='cancel-btn' onClick={handleOpenDeleteModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
