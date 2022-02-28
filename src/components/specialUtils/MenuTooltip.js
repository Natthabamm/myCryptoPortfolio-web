import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import '../../styles/dashboard/AssetTable.css';

const MenuTooltip = ({ open, anchorEl, handleCloseMenu1 }) => {
  return (
    <div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu1}>
        <MenuItem>
          <CompareArrowsIcon />
          Trasaction
        </MenuItem>
        <MenuItem onClick={handleCloseMenu1}>
          <DeleteIcon />
          Remove Asset
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuTooltip;
