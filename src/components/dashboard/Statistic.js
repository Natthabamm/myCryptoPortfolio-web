import React from 'react';
import '../../styles/dashboard/Statistic.css';
import dot from '../../pics/crypto/dot.png';
import ksm from '../../pics/crypto/ksm.png';

const Statistic = () => {
  return (
    <div className='state'>
      <div className='group-all'>
        <div className='inside-group-all'>
          <span className='span-all'>All time Profit</span>
          <div>
            <i className='fas fa-caret-down' style={{ color: 'red' }} />
            {/* <i className='fas fa-caret-up' style={{ color: 'green' }} /> */}
            39.27%(- $1,679.81)
          </div>
        </div>
      </div>

      <div className='group-best'>
        <div className='coin-img'>
          <img src={ksm} alt='' />
        </div>
        <div>
          <span className='span-best'>Best Performer</span>
          <div>
            <i className='fas fa-caret-down' style={{ color: 'red' }} />
            {/* <i className='fas fa-caret-up' style={{ color: 'green' }} /> */}
            35.27%(- $481.97)
          </div>
        </div>
      </div>
      <div className='group-worst'>
        <div className='coin-img'>
          <img src={dot} alt='' />
        </div>
        <div>
          <span className='span-best'>Worst Performer</span>
          <div>
            <i className='fas fa-caret-down' style={{ color: 'red' }} />
            {/* <i className='fas fa-caret-up' style={{ color: 'green' }} /> */}
            41.14%(- $1,197.53)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
