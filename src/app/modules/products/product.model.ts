import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
    name:String,
    price:Number,
    stock:Number,
    quantity:Number,
    description:String,
    category:String,
    rating:Number,
    image:String,
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'available',
      },
      isDeleted: {
        type: Boolean,
        default: false,
        required: true,
      },

},{
    timestamps:true,
})

export const Product = model<TProduct>('Product',productSchema) ;
// name, price, stock, quantity, description, category, ratings, and images.