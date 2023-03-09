import {STATUS_CODE} from "../utils/statusCode.js";
import { newContentSchema } from "../schemas/newContentSchema.js";

export async function newContentValidate(req, res, next){
    const {newContent} = req.body;

    try{
        const {error}= newContentSchema.validate(newContent, {abortEarly:false});

        if(error){
            const err=error.details.map((detail)=>detail.message);
            return res.status(STATUS_CODE.BAD_REQUEST).send({err});
        }

        next;
    }catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR).send(err.message);
    }
}