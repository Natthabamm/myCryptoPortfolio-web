import React, { useState } from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ConfirmDeleteModal from '../utils/ConfirmDeleteModal';
import { useNavigate } from 'react-router-dom'

const MenuTooltip = ({ isActive, dropdownRef }) => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

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
            onClick={e => navigate('/transactions')}
          >
            <CompareArrowsIcon sx={{ marginLeft: '5px' }} />
            &nbsp;
            <div className='transaction-li'>Transaction</div>
          </li>
          <li
            className='li-menu-1'
            onClick={() => setShow(true)}
          >
            <DeleteOutlineIcon />
            <div className='remove-li'>Remove Assets</div>
          </li>
        </ul>
      </nav>
      <ConfirmDeleteModal onClose={e => setShow(false)} show={show} />
    </>
  );
};

export default MenuTooltip;
