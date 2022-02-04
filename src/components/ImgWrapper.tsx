import { ImgWrapperProps } from 'types/types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 25px 5px 10px 10px;
  border-radius: 16px;
  width: 106px;
  height: 106px;
  cursor: pointer;
  z-index: 0;
  border: ${({ focus }: { focus: boolean }) =>
    !focus ? '2px solid #b2b6bc' : '2px solid #e77596'};
`;

const ImgWrapper = (props: ImgWrapperProps): JSX.Element => {
  return (
    <Wrapper focus={props.focus} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
};

export default ImgWrapper;
