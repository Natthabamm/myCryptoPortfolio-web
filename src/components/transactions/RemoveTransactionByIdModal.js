import React from 'react'
import '../../styles/transactions/RemoveTransactionByIdModal.css'

const RemoveTransactionByIdModal = (props) => {
  return (
    <div className='modal-id' role='button' onClick={props.onClose}>
      <div className='modal-content-id' onClick={(e) => e.stopPropagation()}>
        <div className='div-in-modal-id'>
          <h5 className='h5-in-modal-id'>Remove assets</h5>
          <span onClick={props.onClose}>
            <i className='fas fa-times' style={{ color: 'white' }} />
          </span>
        </div>
        <div className='modal-body-id'>
          <div className='text-id'>Are you sure you want to remove this transaction?</div>
          <button className='remove-btn-id'>Remove</button>
          <button className='cancel-btn-id'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default RemoveTransactionByIdModal;