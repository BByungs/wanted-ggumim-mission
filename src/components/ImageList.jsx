import Img from "common/Img";
import Wrapper from "common/Wrapper";
import { DiscountRate, ImgWrapper } from "styles/ImageListStyle";

const ImageList = ({ data, setData }) => {
  const imgClick = (id, idx) => {
    if (data.productList[idx].focus) {
      document.getElementById(`${id}`).focus();
    }
    const copyData = { ...data };
    copyData.productList.forEach((el, productIdx) => {
      if (productIdx === idx) {
        el.focus = !el.focus;
      } else {
        el.focus = false;
      }
    });
    setData(copyData);
  };
  return (
    <Wrapper>
      {data?.productList.map((el, idx) => (
        <ImgWrapper
          key={el.productId}
          id={el.productId}
          tabIndex="0"
          focus={el.focus}
          onClick={() => imgClick(el.productId, idx)}
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
