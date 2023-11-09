import React from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";

const CoinSelector = (props) => {
  const { setAction, selectedToken, setSelectedToken } = props;
  const { walletAddress, sanityTokens, thirdWebTokens } = props;

  return (
    <Wrapper>
      <Title>Selector Assets</Title>
      <CoinList>
        {sanityTokens.map((token, idx) => (
          <CoinItem
            key={idx}
            token={token}
            sender={walletAddress}
            {...{
              setAction,
              selectedToken,
              setSelectedToken,
              sanityTokens,
              thirdWebTokens,
            }}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelector;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;
