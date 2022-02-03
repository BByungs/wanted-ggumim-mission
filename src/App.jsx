import { useEffect, useState } from "react";
import {InfoInPhoto , InfoInPhotoWrapper} from "components"
import { getApi } from "utils/utilFuncs"
import GlobalStyle from "styles/GlobalStyle";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getApi(data, setData);
  }, []);

  return (
    <>
      <GlobalStyle />
      <InfoInPhotoWrapper>
        <InfoInPhoto image={data?.imageUrl} data={data} setData={setData} />
      </InfoInPhotoWrapper>
    </>
  );
};

export default App;