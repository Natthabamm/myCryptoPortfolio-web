import React from 'react';
import '../../styles/dashboard/EditTransactionModal.css'
import EditTransactionForm from './EditTransactionForm'

const EditTransactionModal = (props) => {
    if (!props.show) return null;
  return (
    <>
      <div className='modal-e' role='button' onClick={props.onClose}>
        <div className='modal-content-e' onClick={(e) => e.stopPropagation()}>
          <div className='div-in-modal-e'>
            <h5 className='h5-in-modal-e'>Edit Transaction</h5>
            <span onClick={props.onClose}>
              <i className='fas fa-times' style={{ color: 'white' }} />
            </span>
          </div>
          <div className='modal-body-e'>
              <EditTransactionForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTransactionModal;
