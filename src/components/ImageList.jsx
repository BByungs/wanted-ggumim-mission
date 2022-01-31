import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
`;

const Img = styled.img`
  margin-right: 5px;
`;

const ImageList = ({ data }) => {
  return (
    <Wrapper>
      {data.productList.map((el) => (
        <Img key={el.productId} src={el.imageUrl}></Img>
      ))}
    </Wrapper>
  );
};

export default ImageList;
