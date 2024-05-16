const {Contract} = require('fabric-contract-api');

class NFT extends Contract {

    async initLedger(ctx) {
        console.log("--------------------- Ledger initiated -------------------")
        // any code which we want to run when the server starts
        const fee = {
            royaltyFee : 5,
            platformFee : 5
        }

        await ctx.stub.putState("feeDefault" , JSON.stringify(fee));
    }

    async createNFT(ctx , type , nftID , nftURI , nftPrice) {
        // only admin can create an NFT check (1 , 2)
        // (1) fetch admin wallet and current user
        const adminWallet = ctx.clientIdentity("admin");
        const currentUserWallet = ctx.clientIdentity.getAttibute("hf.Enrollment");
        if (adminWallet.identity !== currentUserWallet.identity) {
            throw new Error("Only admin can perform this action");
        }

        // NFT creation code 
        const nft = {
            type : type,
            nftID : nftID,  // unique
            nftURI , nftURI,
            nftPrice : nftPrice
        }

        await ctx.stub.putState("nftID" , JSON.stringify(nft));
    }

    async getNFT(ctx ,nftID) {
        var nftData = await ctx.stub.getState(nftID);
        return JSON.parse(nftData.toString()); // bytes array -> string -> JSON parse => Object {}
    }

}

module.exports = NFT;