export type TProduct ={
    name:string;
    price:number;
    stock:number;
    quantity:number;
    description:string;
    category:string;
    rating:number;
    image:string;
    status: 'available' | 'unavailable';
    isDeleted:boolean;
}
// name, price, stock, quantity, description, category, ratings, and images.