import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  margin: 25px 5px 10px 10px;
  border-radius: 16px;
  width: 106px;
  height: 106px;
  cursor: pointer;
  display: flex;
  z-index: 0;
  border: ${(props) =>
    !props.focus ? "2px solid #b2b6bc" : "2px solid #e77596"};
`;

export const DiscountRate = styled.div`
  position: absolute;
  top: 0px;
  right: 5px;
  background-image: url("http://cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png");
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
