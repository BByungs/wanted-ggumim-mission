import {Img, Wrapper} from "common";
import {ImageList, Tooltip} from "components";
import { handleMagnifier, handleClose } from "utils/utilFuncs";
import { Background, ImgWrapper, ScrollWrapper } from 'styles/InfoInPhotoStyle';

const InfoInPhoto = ({ image, data, setData }) => {

  const handleBackground = (e) => {
    if (e.target.localName === 'div' && e.target.childNodes.length >= 7) {
      const copyData = { ...data };
      copyData.productList.forEach((el) => {
        el.focus = false;
      });
      setData(copyData);
    }
  };

  return (
    <Wrapper style={{ flexDirection: 'column' }}>
      <Background image={image} onClick={handleBackground}>
        {data?.productList.map((el, idx) => (
          <ImgWrapper key={el.productId} pointX={el.pointX} pointY={el.pointY}>
            {el.focus ? (
              <>
                <Img
                  src={
                    'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
                  }
                  onClick={() => handleClose(idx,data,setData)}
                  alt="close"
                  style={{
                    width: '32px',
                    height: '32px',
                    position: 'relative',
                  }}
                />
                <Tooltip
                  image={`https:${el.imageUrl}`}
                  productName={el.productName}
                  discountRate={el.discountRate}
                  priceDiscount={el.priceDiscount}
                  pointX={el.pointX}
                  pointY={el.pointY}
                />
              </>
            ) : (
              <Img
                src={
                  'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
                }
                onClick={() => handleMagnifier(idx,data,setData)}
                alt="magnifier"
                style={{ width: '32px', height: '32px' }}
              />
            )}
          </ImgWrapper>
        ))}
      </Background>
      <ScrollWrapper>
        <ImageList data={data} setData={setData} />
      </ScrollWrapper>
    </Wrapper>
  );
};

export default InfoInPhoto;
