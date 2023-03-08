import { STATUS_CODE } from '../utils/statusCode.js';
import {QueryUser} from "../repositories/getUserQuery.js";

async function getUserById(req, res){
    const {user_id} = req.params
    try{
        const infoUser = await QueryUser(user_id)
        res.status(STATUS_CODE.OK).send(infoUser)
    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}
export {getUserById}