import mongoose, { Types } from 'mongoose'

interface IProduct {
    name: string
    description: string
    price: number
    image: string
    authorName: string
    pages: number
}
const productSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    },
    image: {
        type: String,
        required: [true, "image is required"]
    },
    authorName: {
        type: String,
        required: [true, "Author name is required"]
    },
    pages: {
        type: Number,
        required: [true, "pages required"]
    }
}, {
    timestamps: true
})

export const Product = new mongoose.Model("Product", productSchema);