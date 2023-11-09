import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Custom from "../Custom";
import action from "../action";
import Main from "./Main/index";

const Dashboard = ({ walletAddress }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const setVV = async () => {
      const tokens = await action.token._3rdWeb_sanity_tokens();
      const { _3rdwebTokens, _sanityTokens } = tokens;
      setSanityTokens(_sanityTokens);
      setThirdWebTokens(_3rdwebTokens);
    };
    return setVV();
  }, []);

  return (
    <Wrapper>
      <Custom.Sidebar />
      <MainContainer>
        <Custom.Header {...{ walletAddress, sanityTokens, thirdWebTokens }} />
        <Main {...{ walletAddress, sanityTokens, thirdWebTokens }} />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
