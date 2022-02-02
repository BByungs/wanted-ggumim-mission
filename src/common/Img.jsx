const Img = ({ src, alt, style, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} style={{ ...style }} />;
};

export default Img;
