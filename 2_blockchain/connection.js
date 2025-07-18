const {Gateway} = require('fabric-gateway');
const fs = require('fs')

async function connectHLFNetwork(username , org) {  //org1 , org2
    const wallet = fs.readFile(`./VSCODE/wallet/${org}/${username}`)
    const ccp = `./VSCODE/${org}/connection-${org}.json`

    const gateway = new Gateway();
    await gateway.connect(wallet , ccp);
    const network = await gateway.getChannel("NFT_Channel");
    const contract = await network.getContract("NFT");

    return {contract , gateway} ;
}

async function createNFTCall(user , org , type , nftID , nftURI , nftPrice) {  // REST API CALL 
    try {
        var {contract , gateway} = await connectHLFNetwork(user , org);
        var response = await contract.submitTransaction("createNFT" , type , nftID , nftURI , nftPrice);
        await gateway.close();
        return response;
    } catch (error) {
        return error
    }
}