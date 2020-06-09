import { Algod } from 'algosdk';

const testnetServer = "https://testnet-algorand.api.purestake.io/ps1"
const mainnetServer = "https://mainnet-algorand.api.purestake.io/ps1"
const token = {
    'X-API-key' : 'ZgqaehGkvP6pSNSaoNoy31Nr61BZlhU29E9ERPRU',
}

export const algodClient = {
	testNet: new Algod(token, testnetServer, ''),
	mainNet: new Algod(token, mainnetServer, ''),
}