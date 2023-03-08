import s from "../utils/statusCode.js";
import { newContentSchema } from "../schemas/newContentSchema.js";

export async function newContentValidate(req, res, next){
    const {newContent} = req.body;

    try{
        const {error}= newContentSchema.validate(newContent, {abortEarly:false});
        
        if(error){
            const err=error.details.map((detail)=>detail.message);
            return res.status(s.BAD_REQUEST).send({err});
        }

        next;
    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}