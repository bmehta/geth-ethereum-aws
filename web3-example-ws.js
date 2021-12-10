import Web3 from 'web3';
import AWSWebsocketProvider from "./aws-websocket-provider.js";
const endpoint = process.env.AMB_WS_ENDPOINT;
console.log(`ws endpoint: ${endpoint}`);
const web3 = new Web3(new AWSWebsocketProvider(endpoint));
web3.eth.getNodeInfo().then(console.log).then(() => {
	web3.eth.getBlockNumber().then(console.log).then(() => {
		web3.eth.getChainId().then(console.log).then(() => {
			web3.currentProvider.connection.close();
		})
	})
});
