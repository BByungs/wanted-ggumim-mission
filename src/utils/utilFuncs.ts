import { ApiDataType, ProductListType } from 'types/types';
import axios from 'axios';

const getApi = (
  data: ApiDataType | null,
  setData: React.Dispatch<React.SetStateAction<ApiDataType | null>>
) => {
  axios
    .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
    .then((res) => {
      if (!data) {
        res.data.productList.forEach((product: ProductListType) => {
          product.focus = false;
        });
        setData(res.data);
      }
    })
    .catch((err) => alert(err));
};

const handleMagnifier = (
  idx: number,
  data: ApiDataType,
  setData: React.Dispatch<React.SetStateAction<ApiDataType | null>>
) => {
  const copyData = { ...data };
  copyData.productList.forEach((el: ProductListType, productIdx: number) => {
    if (productIdx === idx) {
      el.focus = true;
    } else {
      el.focus = false;
    }
  });
  setData(copyData);
};

const handleClose = (
  idx: number,
  data: ApiDataType,
  setData: React.Dispatch<React.SetStateAction<ApiDataType | null>>
) => {
  const copyData = { ...data };
  copyData.productList.forEach((el: ProductListType, productIdx: number) => {
    if (productIdx === idx) {
      el.focus = false;
    }
  });
  setData(copyData);
};

const imgClick = (
  id: number,
  idx: number,
  data: ApiDataType,
  setData: React.Dispatch<React.SetStateAction<ApiDataType | null>>
) => {
  let elem: HTMLElement | null = document.getElementById(`${id}`);
  if (data.productList[idx].focus && elem) {
    elem.focus();
  }
  const copyData = { ...data };
  copyData.productList.forEach((el: ProductListType, productIdx: number) => {
    if (productIdx === idx) {
      el.focus = !el.focus;
    } else {
      el.focus = false;
    }
  });
  setData(copyData);
};

export { getApi, handleMagnifier, handleClose, imgClick };
