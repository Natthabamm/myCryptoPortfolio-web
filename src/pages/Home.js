import React from "react";
import "../styles/Home.css";
import cryptoPic from "../pics/cryptopic.png";

const Home = () => {
  return (
    <>
      <section className='section-home'>
        <div className='left-content-home'>
          <div id='container'>
            LET'S
            <div id='flip'>
              <div>
                <div>START</div>
              </div>
              <div>
                <div>CRYPTO</div>
              </div>
              <div>
                <div>YOUR</div>
              </div>
            </div>
            PORTFOLIO!
          </div>
          <div>
            <div className='explan-div'>
              <p className='p-home'>
                Manage your cryptocurrencies investing to easier, <br />
                Let’s try with us.
              </p>
            </div>
            <button className='button-home'>
              <a className='hover-a' href='/register'>
                Get start
              </a>
            </button>
          </div>
        </div>
        <div className='right-content-home'>
          <img src={cryptoPic} alt='' height={400} width={400} />
        </div>
      </section>
    </>
  );
};

export default Home;
