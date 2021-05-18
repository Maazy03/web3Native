import React from 'react';
import AppNavigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {ovoContractAbi, CONTRACT_ADDRESS} from './src/utils/constants';
const Web3 = require('web3');
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f3d114839d6b4445b71455d8153e8d57',
  ),
);
import './global';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    data();
  }, []);

  const data = async () => {
    console.log('hey');
    let contract = new web3.eth.Contract(ovoContractAbi, CONTRACT_ADDRESS);
    await contract.getPastEvents(
      'RelayerUpdated',
      {
        fromBlock: 8479226,
        toBlock: 'latest',
      },
      async (err, events) => {
        if (!err) {
          // console.log('check events now', events);
        } else {
          console.log('In else err', err.message);
        }
      },
    );
  };

  return <AppNavigation />;
};

export default App;
