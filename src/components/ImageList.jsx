import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 106px;
  height: 106px;
  border-radius: 14px;
`;

const ImgWrapper = styled.div`
  position: relative;
  margin: 10px 5px 10px 10px;
  border-radius: 16px;
  width: 106px;
  height: 106px;
  cursor: pointer;
  border: 2px solid #b2b6bc;
  display: flex;
  z-index: 0;
  &:focus {
    border: 2px solid #e77596;
  }
`;

const DiscountRate = styled.div`
  position: absolute;
  top: 0px;
  right: 5px;
  background-image: url('http://cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png');
  background-position: center center;
  background-size: contain;
  text-align: center;
  line-height: 25px;
  font-weight: bold;
  color: white;
  font-size: 11px;
  width: 24px;
  height: 28px;
  z-index: 1;
`;

const ImageList = ({ data }) => {
  console.log(data);
  const imgClick = (id) => {
    document.getElementById(`${id}`).focus();
  };
  return (
    <Wrapper>
      {data?.productList.map((el) => (
        <ImgWrapper
          key={el.productId}
          id={el.productId}
          tabIndex="0"
          onClick={() => imgClick(el.productId)}
        >
          <Img src={el.imageUrl} />
          {!el.outside && (
            <DiscountRate>
              <span>{el.discountRate}%</span>
            </DiscountRate>
          )}
        </ImgWrapper>
      ))}
    </Wrapper>
  );
};

export default ImageList;
