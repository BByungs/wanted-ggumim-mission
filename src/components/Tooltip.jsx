import styled from "styled-components";
import Wrapper from "common/Wrapper";
import Img from "common/Img";

const ToolTipWrapper = styled.div`
  display: flex;
  z-index: 1000;
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: -150px;
  border-radius: 14px;
  right: ${(props) => (props.pointY < 270 ? "" : "1px")};
  color: #4a4a4a;
  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 8px;
    background-image: url("https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
    box-sizing: border-box;
    margin-top: 110px;
    right: ${(props) => (props.pointY < 270 ? "205px" : "10px")};
    transform: rotate(180deg);
  }
`;

const ToolTipAfterWrapper = styled.div`
  display: flex;
  z-index: 1000;
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 14px;
  right: ${(props) => (props.pointY < 270 ? "" : "1px")};
  color: #4a4a4a;
  margin-bottom: 100px;
  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 8px;
    background-image: url("https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
    box-sizing: border-box;
    margin-bottom: 110px;
    right: ${(props) => (props.pointY < 270 ? "205px" : "10px")};
  }
`;

const ProductImage = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-image: url(${(props) => props.image});
`;

const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: center;
`;

const FunitureName = styled.div`
  text-align: left;
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  padding-top: 10px;
`;

const ExpectedPrice = styled.span`
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

const PriceDiscount = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  font-weight: bold;
`;

const DiscountRate = styled.span`
  color: #ff585d;
  margin-right: 4px;
`;

const Tooltip = ({
  image,
  productName,
  discountRate,
  priceDiscount,
  pointX,
  pointY,
}) => {
  return (
    <>
      {pointX >= 319 ? (
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
              src={
                "https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
              }
              alt="viewProduct"
              style={{ width: "20px", height: "20px" }}
            />
          </Wrapper>
        </ToolTipWrapper>
      ) : (
        <ToolTipAfterWrapper pointX={pointX} pointY={pointY}>
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
              src={
                "https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
              }
              alt="viewProduct"
              style={{ width: "20px", height: "20px" }}
            />
          </Wrapper>
        </ToolTipAfterWrapper>
      )}
    </>
  );
};

export default Tooltip;
