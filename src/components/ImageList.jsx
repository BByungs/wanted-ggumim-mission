import {Img, Wrapper} from "common";
import { DiscountRate, ImgWrapper } from "styles/ImageListStyle";
import { imgClick } from "utils/utilFuncs"

const ImageList = ({ data, setData }) => {
  return (
    <Wrapper>
      {data?.productList.map((el, idx) => (
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
            style={{ width: "106px", height: "106px", borderRadius: "14px" }}
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
