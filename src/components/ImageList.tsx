import { Img, Wrapper } from 'common';
import { ImgWrapper } from 'components';
import { imgClick } from 'utils/utilFuncs';
import { ProductListType, ImageListType } from 'types/types';
import { DiscountRate } from 'styles/ImageListStyle';

const ImageList = ({ data, setData }: ImageListType): JSX.Element => {
  return (
    <Wrapper>
      {data?.productList.map((el: ProductListType, idx: number) => (
        <ImgWrapper
          key={el.productId}
          id={el.productId}
          tabIndex="0"
          focus={el.focus}
          onClick={() => imgClick(el.productId, idx, data, setData)}
        >
          <Img
            src={`https:${el.imageUrl}`}
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
