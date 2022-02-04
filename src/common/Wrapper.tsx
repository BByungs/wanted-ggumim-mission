import styled from 'styled-components';
import { StyleType } from 'types/types';

const Wrap = styled.div`
  display: flex;
`;
type WrapperType = {
  style?: StyleType;
  children: React.ReactNode;
};

const Wrapper = (props: WrapperType): JSX.Element => {
  return <Wrap style={{ ...props?.style }}>{props.children}</Wrap>;
};

export default Wrapper;
