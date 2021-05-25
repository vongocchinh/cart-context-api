var products = [
  {
    id: "1",
    name: "sam sung s20 pro",
    price: 200000,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqd9YWg_aBYxNjYSNblMiADB18CtqgHpQPZoB6nAlD5e4_rR_617iLQpwj9y16bhSOH71NXR38_vw&usqp=CAc",
  },
  {
    id: "2",
    name: "sam sung s20 lite",
    price: 300000,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRf6FIiw3lJF_X4beB47ve7vTYOv31k_0BpuU2cMr_dlcZLvUbn1sTAbL3pEJkT_YjXfFCpJ9nEMw&usqp=CAc",
  },
  {
    id: "3",
    name: "sam sung s20 cover",
    price: 400000,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGGM3dePENMmySOkUvy8j9g__ag8_W5XllOjz5lwcolkTMVnVPoUyVp7Y0w-YZFIX1eIKpDEA5ww&usqp=CAc",
  },
];
var data=JSON.parse(localStorage.getItem('cart'));

export const initialState = {
  todo: {
    product: products,
    cart: data?data:[],
  },
};
