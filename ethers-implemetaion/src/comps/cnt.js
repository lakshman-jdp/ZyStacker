//
import { passError, toNumber } from "./utils";
import { _contract } from "./utils";
//
const { contract: cnt, signer } = _contract();

//
const Expo = {
  // ***************************************************
  // *********************  base   *********************
  // ***************************************************
  base: async () => {
    try {
      const name = await cnt?.name()
      const owner = await cnt?.owner()
      const symbol = await cnt?.symbol()
      const tokenURI = await cnt?.tokenURI(1)
      const openPass = await cnt?.openPass()
      const totalSupply = toNumber(await cnt?.totalSupply())
      return { name, owner, symbol, tokenURI, openPass, totalSupply }
    } catch (error) {
      passError(error, "_3DPass/base");
    }
  },
  // ***************************************************
  // *********************  mint   *********************
  // ***************************************************
  actOne: async (name, One) => {
    try {
      let transaction, result;
      let isResult = true;      
      if(name === 'mint') {
        isResult = false
        transaction = await cnt?.connect(signer)?.mint(One)
      } else if(name === 'isVerified') {
        result = await cnt?.isVerified(One)
      } else if(name === 'isWhitelisted') {
        result = await cnt?.isWhitelisted(One)        
      } else if(name === 'getInfo') {
        result = await cnt?.getInfo(One)        
      } else if(name === 'ownerOf') {
        result = await cnt?.ownerOf(One)        
      } else if(name === 'tokenURI') {
        result = await cnt?.tokenURI(One)        
      }
      if(isResult) {
        return result
      } else {
        const receipt = await transaction.wait();
        return receipt.status === 1  
      }
    } catch (error) {
      return error
      // passError(error, "_3DPass/mint");
    }
  },
  // ***************************************************
  // *********************  setWhitelist   *********************
  // ***************************************************
  actTwo: async (name, One, Two) => {
    try {
      let transaction;
      if(name === 'setWhitelist') {
        transaction = await cnt?.connect(signer)?.setWhitelist(One, Two) 
      } else if(name === 'setAccess') {
        transaction = await cnt?.connect(signer)?.setAccess(One, Two)
      }
      const receipt = await transaction.wait();
      return receipt.status === 1
    } catch (error) {
      return error
      // passError(error, "_3DPass/setWhitelist");
    }
  },
};

export default Expo;


// name()
// openPass()
// owner()
// symbol()
// totalSupply()

// balanceOf(address)
// getApproved(uint256)
// isApprovedForAll(address,address)

// getInfo(address)
// isVerified(address)
// isWhitelisted(address)
// mint(address)
// ownerOf(uint256)
// tokenURI(uint256)

// renounceOwnership()
// setAccess(address,bool)
// setApprovalForAll(address,bool)
// setMultipleAccess(address[],bool)
// setMultipleWhitelist(address[],bool)
// setWhitelist(address,bool)

// transferOwnership(address)

// approve(address,uint256)
// supportsInterface(bytes4)
// transferFrom(address,address,uint256)
// safeTransferFrom(address,address,uint256)
// safeTransferFrom(address,address,uint256,bytes)
