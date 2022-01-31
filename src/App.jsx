import axios from "axios";
import ImageList from "components/ImageList";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [data, setData] = useState([]);
  const getApi = () => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        if (!data.length) {
          setData((prev) => [...prev, res.data]);
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <GlobalStyle />
      <RootContainer>
        <ImageList data={data[0]} />
      </RootContainer>
    </>
  );
};

export default App;
