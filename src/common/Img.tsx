import { StyleType } from 'types/types';

type ImgType = {
  src: string;
  alt: string;
  onClick?: () => void;
  style?: StyleType;
};

const Img = ({ src, alt, style, onClick }: ImgType): JSX.Element => {
  return <img src={src} alt={alt} onClick={onClick} style={{ ...style }} />;
};

export default Img;
