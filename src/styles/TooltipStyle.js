import styled from "styled-components";

export const ToolTipWrapper = styled.div`
  display: flex;
  z-index: 1000;
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: ${(props) => (props.pointX >= 319 ? "-150px" : "0px")};
  border-radius: 14px;
  right: ${(props) => (props.pointY < 270 ? "" : "1px")};
  color: #4a4a4a;
  margin-bottom: ${(props) => (props.pointX >= 319 ? "0px" : "100px")};

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
    margin-top: ${(props) => (props.pointX >= 319 ? "110px" : "0px")};
    margin-bottom: ${(props) => (props.pointX >= 319 ? "0px" : "110px")};
    right: ${(props) => (props.pointY < 270 ? "205px" : "10px")};
    ${(props) =>
      props.pointX > 319 && {
        transform: "rotate(180deg)",
      }};
  }
`;

export const ProductImage = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-image: url(${(props) => props.image});
`;

export const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: center;
`;

export const FunitureName = styled.div`
  text-align: left;
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  padding-top: 10px;
`;

export const ExpectedPrice = styled.span`
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

export const PriceDiscount = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  font-weight: bold;
`;

export const DiscountRate = styled.span`
  color: #ff585d;
  margin-right: 4px;
`;
