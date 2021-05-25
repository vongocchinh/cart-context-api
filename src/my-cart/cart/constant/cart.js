export const ADD_CART='ADD_CART';
export const DELETE_ITEM_CART='DELETE_ITEM_CART';
export const UPDATE_INCREASE_CART='UPDATE_INCREASE_CART';
export const UPDATE_REDUCTION_CART='UPDATE_REDUCTION_CART';


export const Total=(quantity,price)=>{
    return quantity*price;
}


export const total_cart=(cart)=>{
    var tong=0;
    for(let i=0;i<cart.length;i++){
        tong+=(cart[i].quantity*cart[i].product.price);
    }
    return tong;
}

export const total_quantity=(cart)=>{
    var tong=0;
    for(let i=0;i<cart.length;i++){
        tong+=(cart[i].quantity);
    }
    return tong;
}