import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const getApi = async () => {
    try {
      const apiData = JSON.parse(localStorage.getItem("apiData")) || [];
      if (apiData.length === 0) {
        const getData = await axios.get(`${process.env.REACT_APP_API}`);
        apiData.push(getData.data);
        localStorage.setItem("apiData", JSON.stringify(apiData));
      }
    } catch (err) {
      return alert(err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  // Component에 data를 setter로 받아서 쓰면 됨
  const data = JSON.parse(localStorage.getItem("apiData"))[0] || [];

  return (
    <>
      <GlobalStyle />
      <RootContainer>
        <div>Test</div>
      </RootContainer>
    </>
  );
};

export default App;
