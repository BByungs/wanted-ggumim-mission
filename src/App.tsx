import { InfoInPhoto, InfoInPhotoWrapper } from 'components';
import { useEffect, useState } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { getApi } from 'utils/utilFuncs';
import { ApiDataType } from 'types/types';

const App = () => {
  const [data, setData] = useState<ApiDataType | null>(null);

  useEffect(() => {
    getApi(data, setData);
  }, []);
  return (
    <>
      <GlobalStyle />
      <InfoInPhotoWrapper>
        {data && (
          <InfoInPhoto image={data.imageUrl} data={data} setData={setData} />
        )}
      </InfoInPhotoWrapper>
    </>
  );
};

export default App;
