import React from "react";
import PublicNavbar from "../components/layouts/PublicNavbar";
import "../styles/Home.css";
import cryptoPic from "../pics/cryptopic.png";

const Home = () => {
  return (
    <div>
      <PublicNavbar />

      <section className="section-home">
        <div className='left-content-home'>
          <h1>Let start <br/>your Crypto <br/>portfolio</h1>
          <div>
            <div className="explan-div">
              <p>
                Manage your cryptocurrencies investing to easier, <br/>Let’s try with
                us.
              </p>
            </div>
            <button className="button">
              <a className="hover-a" href="/register">Getstart</a>
            </button>
          </div>
        </div>
        <div className='right-content-home'>
          <img src={cryptoPic} alt='' height={400} width={400} />
        </div>
      </section>
    </div>
  );
};

export default Home;
