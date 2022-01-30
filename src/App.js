import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const getApi = async () => {
    try {
      const getData = await axios.get(`${process.env.REACT_APP_API}`);
      console.log(getData);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

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
