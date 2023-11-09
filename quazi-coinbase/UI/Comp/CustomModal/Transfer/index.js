import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";
import Transfer from "./Transfer";
import Receive from "./Receive";
import CoinSelector from "./CoinSelector";

const TransferModal = (props) => {
  const { walletAddress, sanityTokens, thirdWebTokens } = props;
  const [action, setAction] = useState("Send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);
  const setActionStyle = (v) =>
    v === action ? selectedStyle : unselectedStyle;

  const CustomOption = ({ content }) => (
    <Option style={setActionStyle(content)} onClick={() => setAction(content)}>
      <p>{content}</p>
    </Option>
  );

  useEffect(() => {
    selectedToken === undefined && setSelectedToken(sanityTokens[0]);
  }, [sanityTokens]);

  const receiveProps = { setAction, selectedToken, walletAddress };
  let transferProps = { setAction, setSelectedToken, walletAddress };
  transferProps = { ...transferProps, selectedToken, thirdWebTokens };
  const selectProps = { setAction, selectedToken, setSelectedToken, ...props };

  const selectedModal = (option) => {
    switch (option) {
      case "Send":
        return <Transfer {...transferProps} />;
      case "Receive":
        return <Receive {...receiveProps} />;
      case "Select":
        return <CoinSelector {...selectProps} />;
      case "transfering":
        return (
          <div style={transferingStyle}>
            <h2>Transfer in progress...</h2>
            <TailSpin {...spinProps} />
          </div>
        );
      case "transferred":
        return (
          <div style={transferredStyle}>
            <h4 style={{ color: "green" }}>Transfer Completed</h4>
          </div>
        );
      default:
        return <h2>default</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <CustomOption content="Send" />
        <CustomOption content="Receive" />
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;
const transferredStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: "600",
  color: "#27ad75",
};
const transferingStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
};
const spinProps = {
  height: "100",
  width: "100",
  color: "#3773f5",
  ariaLabel: "Loading",
};

const selectedStyle = { color: "#3773f5" };
const unselectedStyle = { border: "1px solid #282c2f" };

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-size: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
