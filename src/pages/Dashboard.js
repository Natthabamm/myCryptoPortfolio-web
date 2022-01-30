import React from "react";
import CryptoCard from "../components/dashboard/CryptoCard";
import "../styles/dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className='bg-dashboard'>
      <div className='main-content'>
        <div className='head-main'>
          <div className='left-inside-main'>
            <h5>Current Balance</h5>
            <div className='balance-main'>
              <h2>US$0</h2>
              <div className='percent-inside-balance'>--%</div>
            </div>
            <div className='percent-main'>
              +$0
              <div className='time-inside-percent'>(24H)</div>
            </div>
          </div>
          <div className='right-inside-main'>
            <button className='add-new'>
              <i className='fas fa-plus-circle' style={{ color: "white" }} />
              Add New
            </button>
          </div>
        </div>
        <div className='center-main'>
          <div className='content-center-main'>
            <div className="text-center-main">
                This portfolio is empty
                <br />
                Add any coins to get start
            </div>
            <div>
              <button className='add-new-1'>
                <i className='fas fa-plus-circle' style={{ color: "white" }} />
                Add New
              </button>
            </div>
          </div>
        </div>
        <div className='footer-main'>footer</div>
      </div>
      <div className='card-content'>
        <div className="merket-trend">Market trend</div>
          <CryptoCard />
      </div>
    </div>
  );
};

export default Dashboard;
