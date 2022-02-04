export type ProductListType = {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
  focus: boolean;
};

export type TooltipType = {
  image: string;
  productName: string;
  discountRate: number;
  priceDiscount: number;
  pointX: number;
  pointY: number;
};

export type ImgWrapperProps = {
  focus: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
};

export type ApiDataType = {
  id: string;
  imageUrl: string;
  productList: ProductListType[];
};

export type StyleType = {
  [key: string]: string | number;
};

export type ImageListType = {
  data: ApiDataType;
  setData: React.Dispatch<React.SetStateAction<ApiDataType | null>>;
};

export type InfoInPhotoType = {
  image: string;
  data: ApiDataType;
  setData: React.Dispatch<React.SetStateAction<ApiDataType | null>>;
};
