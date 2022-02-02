import Wrapper from "common/Wrapper";
import Img from "common/Img";
import {
  Desc,
  DiscountRate,
  ExpectedPrice,
  FunitureName,
  PriceDiscount,
  ProductImage,
  ToolTipWrapper,
} from "styles/TooltipStyle";

const Tooltip = ({
  image,
  productName,
  discountRate,
  priceDiscount,
  pointX,
  pointY,
}) => {
  return (
    <ToolTipWrapper pointX={pointX} pointY={pointY}>
      <ProductImage image={image}></ProductImage>
      <Desc>
        <FunitureName>{productName}</FunitureName>
        <Wrapper
          style={{
            alignItems: "center",
            marginTop: "4px",
            marginBottom: "10px",
          }}
        >
          {discountRate === 0 ? (
            <>
              <ExpectedPrice>예상가</ExpectedPrice>
              <PriceDiscount>{priceDiscount}</PriceDiscount>
            </>
          ) : (
            <>
              <DiscountRate>{discountRate}%</DiscountRate>
              <PriceDiscount>{priceDiscount}</PriceDiscount>
            </>
          )}
        </Wrapper>
      </Desc>
      <Wrapper
        style={{
          alignItems: "flex-end",
          marginTop: "auto",
          marginRight: "2px",
          marginBottom: "10px",
        }}
      >
        <Img
          src={"https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"}
          alt="viewProduct"
          style={{ width: "20px", height: "20px" }}
        />
      </Wrapper>
    </ToolTipWrapper>
  );
};

export default Tooltip;
