import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
    const product = Product.create(payload)
    return product
};

// const getAllProduct = async (payload:TProduct) => {
//     if(payload.isDeleted == false){
//         const product = Product.find()
//         return product
//     }
   
// }

const getAllProductIntoDB = async () => {
    const products = await Product.find({ isDeleted: false });
    return products;
  };

const getSingleProductIntoDB = async (id:string) => {
    const product = await Product.findById(id);
    return product;

}
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
    const car = await Product.findByIdAndUpdate(id, payload, { new: true });
    return car;
  }

const deleteCarIntoDB = async (id: string) => {
    const car = await Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return car;
};


export const ProductServices ={
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleProductIntoDB,
    updateProductIntoDB,
    deleteCarIntoDB
}
