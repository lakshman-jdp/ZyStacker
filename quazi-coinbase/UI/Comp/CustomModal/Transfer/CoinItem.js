import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../lib/sanity";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const CoinItem = (props) => {
  const { token, sender, setAction, thirdWebTokens } = props;
  const { selectedToken, setSelectedToken, sanityTokens } = props;

  const [balance, setBalance] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const ckAddress = (v) => v === token.contractAddress;

  useEffect(() => {
    const setVV = async () => {
      const active3rdWebToken = thirdWebTokens.find((T) =>
        ckAddress(T.address)
      );

      if (active3rdWebToken) {
        const balance = await active3rdWebToken.balanceOf(sender);
        return await setBalance(`${balance?.displayValue}`.split(".")[0]);
      }
    };
    thirdWebTokens && setVV();
  }, [thirdWebTokens]);

  useEffect(() => {
    if (token?.logo) {
      setImageUrl(imageUrlBuilder(client).image(token?.logo).url());
    }
  }, [token]);

  const wrapProps = {
    style: { backgroundColor: selectedToken.name === token.name && "#141519" },
    onClick: () => {
      setSelectedToken(token);
      setAction("Send");
    },
  };
  return (
    <Wrapper {...wrapProps}>
      <Main>
        <Icon>
          <img src={imageUrl} />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbol}</Symbol>
        </NameDetails>
      </Main>
      <Balance>
        {balance} {token.symbol}
      </Balance>
      <IsSelected>
        {ckAddress(selectedToken.contractAddress) && <FaCheck />}
      </IsSelected>
    </Wrapper>
  );
};

export default CoinItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: #0e0f14;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`;

const NameDetails = styled.div``;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

const Balance = styled.div``;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;

const Symbol = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
`;
