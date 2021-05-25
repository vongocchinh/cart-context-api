export const Product='Product'

export const FORMAT_CURRENT=(price)=>{
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}