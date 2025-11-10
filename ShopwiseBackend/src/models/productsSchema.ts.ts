import { model, Schema } from "mongoose";

export interface IProducts{
    image?: string;
    title: string;
    description: string;
    price: number;
    createdAt?: Date;
}

const productSchema = new Schema<IProducts> ({
    image: { 
        type: String 
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    createdAt:{
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    }
})

export const Product = model<IProducts>("Product", productSchema)

