import React, { useState } from "react";
import "./App.css";
import Web3 from "web3";
const App = () => {
  const [accounts, setAccounts] = useState(null);
  const connectWallet = async () => {
    //check if metamask extension is installed in browser
    if (window.ethereum.isMetaMask) {
      //initialize web3
      const web3Instance = new Web3(window.ethereum);
      const accounts = await web3Instance.eth.requestAccounts();
      setAccounts(accounts);
    }
  };
  return (
    <div className="app">
      {accounts && accounts.length > 0 && (
        <div className="card">
          <h2>Account details</h2>
          <h2>Address: {accounts[0]}</h2>
        </div>
      )}
      {!accounts && (
        <button className="btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default App;
