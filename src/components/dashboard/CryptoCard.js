import React from "react";
import "../../styles/dashboard/CryptoCard.css";
import btc from "../../pics/crypto/btc.png";
import dot from "../../pics/crypto/dot.png";
import ksm from "../../pics/crypto/ksm.png";
import eth from "../../pics/crypto/eth.png";
import bnb from "../../pics/crypto/bnb.png";

const CryptoCard = () => {
  return (
    <>
      {/* card 1 */}
      <div className='ranking'>
        #1
        <div className='crypto-card'>
          <div className='all-layout-card'>
            <div className='upper-inside-card'>
              <div className='left-inside-card'>
                <img src={btc} alt='' width={35} height={35} />
              </div>
              <div className='center-inside-card'>
                BTC
                <div className='center-inside-card-name'>Bitcoin</div>
              </div>
              <div className='reight-inside-card'>+2.05%</div>
            </div>
            <div className='lower-crypto-card'>$50,943.85</div>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className='ranking'>
        #2
        <div className='crypto-card'>
          <div className='all-layout-card'>
            <div className='upper-inside-card'>
              <div className='left-inside-card'>
                <img src={eth} alt='' width={35} height={35} />
              </div>
              <div className='center-inside-card'>
                ETH
                <div className='center-inside-card-name'>Ethereum</div>
              </div>
              <div className='reight-inside-card'>+5.17%</div>
            </div>
            <div className='lower-crypto-card'>$52,618.99</div>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className='ranking'>
        #3
        <div className='crypto-card'>
          <div className='all-layout-card'>
            <div className='upper-inside-card'>
              <div className='left-inside-card'>
                <img src={dot} alt='' width={35} height={35} />
              </div>
              <div className='center-inside-card'>
                DOT
                <div className='center-inside-card-name'>Polkadot</div>
              </div>
              <div className='reight-inside-card'>+31.04%</div>
            </div>
            <div className='lower-crypto-card'>$32.41</div>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className='ranking'>
        #4
        <div className='crypto-card'>
          <div className='all-layout-card'>
            <div className='upper-inside-card'>
              <div className='left-inside-card'>
                <img src={ksm} alt='' width={35} height={35} />
              </div>
              <div className='center-inside-card'>
                KSM
                <div className='center-inside-card-name'>Kusama</div>
              </div>
              <div className='reight-inside-card-k'>- 0.71%</div>
            </div>
            <div className='lower-crypto-card'>$171.95</div>
          </div>
        </div>
      </div>
      {/* card 5 */}
      <div className='ranking'>
        #5
        <div className='crypto-card'>
          <div className='all-layout-card'>
            <div className='upper-inside-card'>
              <div className='left-inside-card'>
                <img src={bnb} alt='' width={35} height={35} />
              </div>
              <div className='center-inside-card'>
                BNB
                <div className='center-inside-card-name'>Binance</div>
              </div>
              <div className='reight-inside-card-k'>- 1.67%</div>
            </div>
            <div className='lower-crypto-card'>$385.92</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
