import { ethers } from 'ethers';
import abi from './abi'

//
export const _contract = () => {
    try {
      // "https://matic-mumbai.chainstacklabs.com"
      const provider = !window.ethereum
        ? new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com")
        : new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract("0x3F9279ae2912f4760192D37E558b5F401972D1EB", abi._3DPass, provider);
      return { contract, signer, error: null };
    } catch (error) {
      return { error, contract: null, signer: null };
    }
  };
  
export const switchToMainnet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (network?.chainId === 137) return;
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: ethers.utils.hexlify(137) }]
        });
      } catch (err02) {
        if (err02?.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "Polygon Mainnet",
                chainId: ethers.utils.hexlify(137),
                nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
                rpcUrls: ["https://polygon-rpc.com/"],
                blockExplorerUrls: ["https://polygonscan.com"]
              }
            ]
          });
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: ethers.utils.hexlify(137) }]
          });
          console.info("**********  switchToMainnet/switchNetwork  **********");
          console.info(err02);
        } else {
          console.error("**********  switchToMainnet/switchNetwork  **********");
          console.error(err02);
        }
      }
    } catch (err01) {
      if (!window.ethereum) {
        console.info("**********  switchToMainnet/getNetwork  **********");
        console.info(err01);
        console.log("Redirecting to Metamask Download.");
        window.open("https://metamask.io/download/", "_blank");
      } else {
        console.error("**********  switchToMainnet/getNetwork  **********");
        console.error(err01);
      }
    }
};
  
export const connectWallet = async (onlyMain = false) => {
    try {
      if (!!onlyMain) await switchToMainnet();
      const accounts = await window?.ethereum?.request({
        method: "eth_requestAccounts"
      });
      return accounts[0];
    } catch (error) {
      console.error(`*********  actions/connectWallet *********`);
      console.error(error);
    }
};
  
export const passError = (error, errorStr) => {
    console.error(`*********  actions/${errorStr} *********`);
    console.error(error);
}

export const parseEther = vl => ethers.utils.parseEther(`${vl}`);
export const toNumber = vl => ethers.BigNumber.from(vl).toNumber();
export const formatEther = vl => ethers.utils.formatEther(vl);
