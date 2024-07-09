import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";

const createProduct = catchAsync(async(req,res)=>{
    const result = await ProductServices.createProductIntoDB(req.body);
        sendResponse(res ,{
            statusCode: httpStatus.OK,
            success: true,
            message:"Product is created successfully",
            data: result
        })
})

const getAllProduct = catchAsync(async(req,res)=>{
    const result = await ProductServices.getAllProductIntoDB();
    sendResponse(res ,{
        statusCode: httpStatus.OK,
        success: true,
        message:"Product is get successfully",
        data: result
    })

})

const getSingleProduct = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await ProductServices.getSingleProductIntoDB(id);
        sendResponse(res ,{
            statusCode: httpStatus.OK,
            success: true,
            message:" Product retrieved successfully",
            data: result
        })
})

const updateProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.updateProductIntoDB(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Car updated successfully",
      data: result,
    });
  });

  const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.deleteCarIntoDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Car deleted successfully',
      data: result,
    });
  });
export const ProductController ={
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}