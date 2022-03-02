import React, { useState } from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ConfirmDeleteModal from '../utils/ConfirmDeleteModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MenuTooltip = ({ isActive, dropdownRef, item }) => {
  const [show, setShow] = useState(false);

  // console.log(item.id);
  const navigate = useNavigate();

  const deleteTransactionById = async (id) => {
    try {
      const res = await axios.delete('/transactions/' + id);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenDeleteModal = () => {
    setShow(!show)
  }

  return (
    <>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <ul>
          <li
            className='li-menu-1'
            role='button'
            onClick={(e) => navigate('/transactions')}
          >
            <CompareArrowsIcon sx={{ marginLeft: '5px' }} />
            &nbsp;
            <div className='transaction-li'>Transaction</div>
          </li>
          <li className='li-menu-1' onClick={() => setShow(true)}>
            <DeleteOutlineIcon />
            <div className='remove-li'>Remove Assets</div>
          </li>
        </ul>
      </nav>
      <ConfirmDeleteModal
        onClose={handleOpenDeleteModal}
        show={show}
        deleteTransactionById={deleteTransactionById}
        item={item}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />
    </>
  );
};

export default MenuTooltip;
