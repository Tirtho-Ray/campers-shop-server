import z from 'zod'
const productVAlidationSchemaCreate= z.object({
    name: z.string().max(20).min(5),
    price: z.number(),
    stock: z.number().int(),
    quantity: z.number().int(),
    description: z.string().max(100).min(10),
    category: z.string(),
    rating: z.number().min(0).max(5),
    image: z.string().url(),
    status: z.enum(["available", "unavailable"]).optional().default("available"),
    isDeleted: z.boolean().default(false),
  });
const productVAlidationSchemaUpdate= z.object({
    name: z.string().max(20).min(5).optional(),
    price: z.number().optional(),
    stock: z.number().int().optional(),
    quantity: z.number().int().optional(),
    description: z.string().max(100).min(10).optional(),
    category: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    image: z.string().url().optional(),
    status: z.enum(["available", "unavailable"]).optional().default("available").optional(),
    isDeleted: z.boolean().default(false).optional(),
  });


export const ProductValidation ={
    productVAlidationSchemaCreate,
    productVAlidationSchemaUpdate
}