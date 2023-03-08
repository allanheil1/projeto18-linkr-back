import { STATUS_CODE } from '../utils/statusCode.js';
import {QueryUser,QuerySeache} from "../repositories/getUserQuery.js";

async function getUserById(req, res){
    const userId =  res.locals.userId;
    try{
        const infoUser = await QueryUser(userId)
        res.status(STATUS_CODE.OK).send(infoUser.rows[0])
    } catch (err) {
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}

async function searche(req, res) {
    const { name } = req.query;
    try {
        const infoUser = await QuerySeache(name);
        return res.send(infoUser.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

export {getUserById, searche}