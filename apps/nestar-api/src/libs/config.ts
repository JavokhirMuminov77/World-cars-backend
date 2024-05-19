import {ObjectId} from "bson";

export const shapeIntoMongoObjectId =(target: any) => {
 return typeof target == "string" ? new ObjectId(target) : target;
 //buyerda shart quyganmiz agart bu string bolsa objectIdga tashlayapmiz gar string bolmasa shu targetni uzini qaytarsin
 
}