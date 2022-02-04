import Wrapper from 'common/Wrapper';

const InfoInPhotoWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Wrapper
      style={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Wrapper
        style={{
          padding: '20px',
          boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 40px -12px',
          borderRadius: '12px',
        }}
      >
        {children}
      </Wrapper>
    </Wrapper>
  );
};

export default InfoInPhotoWrapper;
