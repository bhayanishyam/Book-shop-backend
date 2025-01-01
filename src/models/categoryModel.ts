import mongoose from 'mongoose'

interface ICategory {
    name : string
    description : string

}

const categorySchema = new mongoose.Schema<ICategory>({
    name : {
        type : String,
        require : [true, "name is required"]
    },
    description : {
        type : String,
        required : [true , "description is required"]
    }
}, { timestamps : true

})

export const Category = mongoose.model<ICategory>("category", categorySchema );