import { STATUS_CODE } from '../utils/statusCode.js';
import { fetchMetadataArray } from '../utils/fetchMetadataArray.js';
import {QueryUser,QuerySeache} from "../repositories/getUserQuery.js";
import connection from '../database/database.js';

async function getUserById(req, res){
    const userId =  res.locals.userId;
    try{
        const {rows: infoUser} = await QueryUser(userId)

        const metadataArray = await fetchMetadataArray(infoUser);

        res.status(STATUS_CODE.OK).send( metadataArray )
    } catch (err) {
        console.log(err)
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}

async function searche(req, res) {
    const userId = res.locals.userId;
    try {
        const infoUser = await QuerySeache(userId);
        return res.send(infoUser.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message);
    }
}

export {getUserById, searche}