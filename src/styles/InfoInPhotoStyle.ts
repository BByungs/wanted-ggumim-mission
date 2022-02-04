import styled from 'styled-components';

type BackgroundType = {
  image: string;
};

type ImgWrapperType = {
  pointX: number;
  pointY: number;
};

export const ScrollWrapper = styled.div`
  width: 800px;
  overflow-x: scroll;
`;

export const Background = styled.div`
  background-image: url(${(props: BackgroundType) => props.image});
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
  left: ${(props: ImgWrapperType) => `${props.pointY * 1.7}`}px;
  top: ${(props: ImgWrapperType) => `${props.pointX * 1.55}`}px;
`;
