import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
// import {ovoContractAbi, CONTRACT_ADDRESS} from './constants';
import '../../global';
const Web3 = require('web3');

//ETHERUM CHAIN
// var url = 'https://ropsten.infura.io/v3/9c5d045299f9463ab6ce20c12aebfcd7';
// var web3 = new Web3(url);

//AVALANCHE CHAIN
var url = 'https://api.avax-test.network/ext/bc/C/rpc';
const web3 = new Web3(url);

const W3Screen = () => {
  const [balance, setBalance] = useState('');
  const ethBalance = (acc) => {
    var account1 = acc;
    web3.eth.getBalance(account1, (err, res) => {
      let ans = web3.utils.fromWei(res, 'ether');
      setBalance(ans);
      console.log('BALANCE ACCOUNT', web3.utils.fromWei(res, 'ether'));
    });
  };
  const AvalancheBalance = (acc) => {
    try {
      web3.eth.getBalance(acc, (err, res) => {
        let ans = web3.utils.fromWei(res, 'ether');
        setBalance(ans);
        console.log('BALANCE ACCOUNT AVA', web3.utils.fromWei(res, 'ether'));
      });
    } catch (err) {
      console.log('ERR', err);
    }
  };

  return (
    <View>
      <Text style={{color: 'black', textAlign: 'center'}}>
        PERSON BALANCE {balance}{' '}
      </Text>
      <Button
        title="Eth"
        onPress={ethBalance('0x4AeF35A01D31a802A78341304E9B6b76a23Bb618')}
      />

      <Text style={{color: 'black', textAlign: 'center'}}>
        PERSON BALANCE {balance}{' '}
      </Text>
      <Button
        title="Ava"
        onPress={AvalancheBalance('0x4AeF35A01D31a802A78341304E9B6b76a23Bb618')}
      />
    </View>
  );
};

export default W3Screen;
