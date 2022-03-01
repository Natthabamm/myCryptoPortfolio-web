import React from 'react';
import '../../styles/utils/ConfirmDeleteModal.css';

const ConfirmDeleteModal = (props) => {
  if (!props.show) return null;
  return (
    <div className='modal-cf' role='button' onClick={props.onClose}>
      <div className='modal-content-cf' onClick={(e) => e.stopPropagation()}>
        <div className='div-in-modal-cf'>
          <h5 className='h5-in-modal-cf'>Remove assets</h5>
          <span onClick={props.onClose}>
            <i className='fas fa-times' style={{ color: 'white' }} />
          </span>
        </div>
        <div className='modal-body-cf'>
          <div className='text-cf'>Are you sure you want to remove this coin? Any transactions associated with this coin will also be removed.</div>
          <button className='remove-btn'>Remove</button>
          <button className='cancel-btn'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
