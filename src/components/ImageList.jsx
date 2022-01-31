import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
`;

const Img = styled.img`
  &:nth-child(1) {
    width: 100%;
    height: 100%;
  }
`;

const ImgWrapper = styled.div`
  margin: 10px 5px 10px 10px;
  border-radius: 8px;
  width: 106px;
  height: 106px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #b2b6bc;
  display: flex;
  &:focus {
    border: 2px solid #e77596;
  }
`;

const ImageList = ({ data }) => {
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
        </ImgWrapper>
      ))}
    </Wrapper>
  );
};

export default ImageList;
