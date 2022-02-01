import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  width: 800px;
  overflow-x: scroll;
`;

export const Background = styled.div`
  background-image: url(${(props) => props?.image});
  background-position: center center;
  background-size: contain;
  width: 800px;
  height: 998.39px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  display: block;
  cursor: pointer;
  left: ${(props) => `${props.pointY * 1.7}`}px;
  top: ${(props) => `${props.pointX * 1.55}`}px;
`;
