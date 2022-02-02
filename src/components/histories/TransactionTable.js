import React from "react";
import "../../styles/histories/TransactionTable.css";
import sol from "../../pics/crypto/sol.png";
import buy from "../../pics/transactionTypes/buy.png";
import dot from "../../pics/crypto/dot.png";

const TransactionTable = () => {
  return (
    <>
      <table style={{ color: "white" }}>
        <tr>
          <th style={{ width: "20%" }}>Name</th>
          <th style={{ width: "20%" }}>Type</th>
          <th style={{ width: "20%" }}>Date</th>
          <th style={{ width: "20%" }}>Price</th>
          <th style={{ width: "20%" }}>Amount</th>
        </tr>
        <tr>
          <td>
            <img src={sol} alt='' width={30} height={30} />
            &nbsp; Solana
          </td>
          <td>
            <img src={buy} alt='' width={30} height={30} />
            &nbsp; Buy
          </td>
          <td>date & time</td>
          <td>$196.85</td>
          <td>
            +$19,685.21 <br />
            <span className='coin-in-table'>+100 SOL</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src={dot} alt='' width={30} height={30} />
            &nbsp; Polkadot
          </td>
          <td>
            <img src={buy} alt='' width={30} height={30} />
            &nbsp; Buy
          </td>
          <td>date & time</td>
          <td>$29.21</td>
          <td>
            +$2,910.93 <br />
            <span className='coin-in-table'>+100 DOT</span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default TransactionTable;
