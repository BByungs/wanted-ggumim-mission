import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;

const Wrapper = ({ children, style }) => {
  return <Wrap style={{ ...style }}>{children}</Wrap>;
};

export default Wrapper;
