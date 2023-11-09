import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

export const _sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

export const _toCurrency = (amount = 0, currency = "USD") =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency,
  });
