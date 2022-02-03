import Img from 'common/Img';
import Wrapper from 'common/Wrapper';
import React from 'react';
import { Background, ImgWrapper, ScrollWrapper } from 'styles/InfoInPhotoStyle';
import ImageList from './ImageList';
import Tooltip from './Tooltip';

const InfoInPhoto = ({ image, data, setData }) => {
  const handleClose = (idx) => {
    const copyData = { ...data };
    copyData.productList.forEach((el, productIdx) => {
      if (productIdx === idx) {
        el.focus = false;
      }
    });
    setData(copyData);
  };

  const handleMagnifier = (idx) => {
    const copyData = { ...data };
    copyData.productList.forEach((el, productIdx) => {
      if (productIdx === idx) {
        el.focus = true;
      } else {
        el.focus = false;
      }
    });
    setData(copyData);
  };

  const handleBackground = (e) => {
    if (e.target.localName === 'div') {
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
              <React.Fragment>
                <Img
                  src={
                    'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
                  }
                  onClick={() => handleClose(idx)}
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
              </React.Fragment>
            ) : (
              <Img
                src={
                  'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
                }
                onClick={() => handleMagnifier(idx)}
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
