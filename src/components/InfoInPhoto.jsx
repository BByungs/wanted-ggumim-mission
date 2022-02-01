import styled from 'styled-components';
import ImageList from './ImageList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollWrapper = styled.div`
  width: 800px;
  overflow-x: scroll;
`;

const Background = styled.div`
  background-image: url(${(props) => props?.image});
  background-position: center center;
  background-size: contain;
  width: 800px;
  height: 998.39px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  position: absolute;
  display: block;
  cursor: pointer;
  left: ${(props) => `${props.pointY * 1.7}`}px;
  top: ${(props) => `${props.pointX * 1.55}`}px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const InfoInPhoto = ({ image, data }) => {
  return (
    <Wrapper>
      <Background image={image}>
        {data?.productList.map((el) => (
          <ImgWrapper key={el.productId} pointX={el.pointX} pointY={el.pointY}>
            <Img
              src={
                'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
              }
              alt={el.productName}
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
