import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import CustomModal from "../Comp/CustomModal";
import styled from "styled-components";

Modal.setAppElement("#__next");

const Header = (props) => {
  const { walletAddress, sanityTokens, thirdWebTokens } = props;
  const router = useRouter();
  return (
    <Wrapper>
      <Title>Assets</Title>
      <WalletLink>
        <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
        <WalletAddress>
          {`${walletAddress}`.slice(0, 7)}.....{`${walletAddress}`.slice(35)}
        </WalletAddress>
      </WalletLink>
      <ButtonContainer>
        <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
          Buy / Sell
        </Button>
        <Link href={`/?transfer=1`}>
          <Button>Send / Receice</Button>
        </Link>
      </ButtonContainer>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <CustomModal.Transfer {...props} />
      </Modal>
    </Wrapper>
  );
};

export default Header;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#0a0b0d",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10,11,13,0.75)",
  },
};

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  cursor: pointer;
`;

const WalletLink = styled.div`
  font-size: 1.2rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #27ad75;
`;

const WalletAddress = styled.div`
  font-size: 0.8rem;
`;
