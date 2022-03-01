import React from 'react';

const BlankAsset = ({ setShow }) => {
  return (
    <>
      <div className='text-center-main'>
        This portfolio is empty
        <br />
        Add any coins to get start
      </div>
      <div>
        <button className='add-new-1' onClick={() => setShow(true)}>
          <i className='fas fa-plus-circle' style={{ color: 'white' }} />
          Add New
        </button>
      </div>
    </>
  );
};

export default BlankAsset;
