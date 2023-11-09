import axios from "axios";
import Hoc from "../Hoc";

export const _list = async () => {
  try {
    const url =
      "https://tdgg7vwy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%27coins%27%5D%7B%0A%20%20name%2CusdPrice%2CcontractAddress%2Clogo%2Csymbol%0A%7D";
    const { data } = await axios.get(url);
    return data?.result;
  } catch (err) {
    console.log(`${err}`);
  }
};

export const _3rdWeb_sanity_tokens = async () => {
  try {
    const url =
      "https://tdgg7vwy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%27coins%27%5D%7B%0A%20%20name%2CusdPrice%2CcontractAddress%2Clogo%2Csymbol%0A%7D";
    const { data } = await axios.get(url);

    const _sanityTokens = data?.result;
    const _3rdwebTokens = _sanityTokens.map((T) =>
      Hoc._sdk.getTokenModule(T.contractAddress)
    );

    return { _sanityTokens, _3rdwebTokens };
  } catch (err) {
    console.log(`${err}`);
  }
};
