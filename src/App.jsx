import axios from "axios";
import InfoInPhoto from "components/InfoInPhoto";
import React, { useEffect, useState } from "react";
import GlobalStyle from "styles/GlobalStyle";

const App = () => {
  const [data, setData] = useState(null);
  const getApi = () => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        if (!data) {
          res.data.productList.forEach((product) => {
            product.focus = false;
          });
          setData(res.data);
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <InfoInPhoto image={data?.imageUrl} data={data} setData={setData} />
    </React.Fragment>
  );
};

export default App;
