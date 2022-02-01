import Img from 'common/Img';
import Wrapper from 'common/Wrapper';
import { Background, ImgWrapper, ScrollWrapper } from 'styles/InfoInPhotoStyle';
import ImageList from './ImageList';

const InfoInPhoto = ({ image, data }) => {
  return (
    <Wrapper style={{ flexDirection: 'column' }}>
      <Background image={image}>
        {data?.productList.map((el) => (
          <ImgWrapper key={el.productId} pointX={el.pointX} pointY={el.pointY}>
            <Img
              src={
                'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
              }
              alt={el.productName}
              style={{ width: '32px', height: '32px' }}
            />
          </ImgWrapper>
        ))}
      </Background>
      <ScrollWrapper>
        <ImageList data={data} />
      </ScrollWrapper>
    </Wrapper>
  );
};

export default InfoInPhoto;
