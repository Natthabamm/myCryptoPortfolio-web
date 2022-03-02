import React from 'react'
import { TransactionState } from '../../contexts/TransactionContext';
import '../../styles/transactions/RemoveTransactionByIdModal.css'

const RemoveTransactionByIdModal = ({ show, deleteTransactionById, item, handleOpenRemoveTransactionById }) => {
  if (!show) return null;

  const { fetchAlltransactions } = TransactionState();

  const handleDeletedTransactionById = async () => {
    await deleteTransactionById(item.id)
    await fetchAlltransactions();
    handleOpenRemoveTransactionById()
  }


  return (
    <div className='modal-id' role='button' onClick={handleOpenRemoveTransactionById}>
      <div className='modal-content-id' onClick={(e) => e.stopPropagation()}>
        <div className='div-in-modal-id'>
          <h5 className='h5-in-modal-id'>Remove assets</h5>
          <span onClick={handleOpenRemoveTransactionById}>
            <i className='fas fa-times' style={{ color: 'white' }} />
          </span>
        </div>
        <div className='modal-body-id'>
          <div className='text-id'>Are you sure you want to remove this transaction?</div>
          <button className='remove-btn-id' onClick={handleDeletedTransactionById}>Remove</button>
          <button className='cancel-btn-id' onClick={handleOpenRemoveTransactionById}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default RemoveTransactionByIdModal;