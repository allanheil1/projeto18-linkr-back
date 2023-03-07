import {connection} from "../database/database.js";
import s from "../utils/statusCode.js";

export async function del(req, res){

    try{

    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}
