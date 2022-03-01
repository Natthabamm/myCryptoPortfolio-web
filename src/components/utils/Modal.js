import React from "react";
import "../../styles/utils/Modal.css";
import AddTransactionForm from '../dashboard/AddTransactionForm';

const Modal = (props) => {
  if (!props.show) return null;

  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='div-in-modal'>
          <h5 className='h5-in-modal'>Add Transaction</h5>
          <span onClick={props.onClose}>
            <i className='fas fa-times' style={{ color: "white" }} />
          </span>
        </div>
        <div className='modal-body'>
            <AddTransactionForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
