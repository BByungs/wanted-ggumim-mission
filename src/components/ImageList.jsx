import Img from 'common/Img';
import Wrapper from 'common/Wrapper';
import { DiscountRate, ImgWrapper } from 'styles/ImageListStyle';

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
          <Img
            src={el.imageUrl}
            alt={el.productName}
            style={{ width: '106px', height: '106px', borderRadius: '14px' }}
          />
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
