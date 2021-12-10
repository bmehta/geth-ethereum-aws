# geth-ethereum-aws
Use this to connect to a managed blockchain node in AWS.

Pre-requisites

- Setup a  managed blockchain geth node in AWS by following the steps here - https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/ethereum-nodes.html
- node 14
- Run the following
- `export AWS_ACCESS_KEY_ID="{your key id}"`
- `export AWS_SECRET_ACCESS_KEY="{your access key}"`
- `export AMB_HTTP_ENDPOINT="https://{your node id}.ethereum.managedblockchain.us-east-1.amazonaws.com/"`
- `export AMB_WS_ENDPOINT="wss://{your node id}.wss.ethereum.managedblockchain.us-east-1.amazonaws.com/"`
- `npm i`

To run
- To connect to the node over web sockets run `node web3-example-ws.js`
- To connect to the node over http run `node web3-example-http.js`
