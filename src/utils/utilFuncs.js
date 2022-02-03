import axios from "axios";

const getApi = (data, setData) => {
    axios
      .get("https://cdn.ggumim.co.kr/test/image_product_link.json")
      .then((res) => {
        if (!data) {
          res.data.productList.forEach((product) => {
            product.focus = false;
          });
          setData(res.data);
        }
      })
      .catch((err) => alert(err));
};

const handleMagnifier = (idx, data, setData) => {
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

const handleClose = (idx, data, setData) => {
    const copyData = { ...data };
    copyData.productList.forEach((el, productIdx) => {
      if (productIdx === idx) {
        el.focus = false;
      }
    });
    setData(copyData);
};

const imgClick = (id, idx, data, setData) => {
    if (data.productList[idx].focus) {
      document.getElementById(`${id}`).focus();
    }
    const copyData = { ...data };
    copyData.productList.forEach((el, productIdx) => {
      if (productIdx === idx) {
        el.focus = !el.focus;
      } else {
        el.focus = false;
      }
    });
    setData(copyData);
};

export {
    getApi,
    handleMagnifier,
    handleClose,
    imgClick
}