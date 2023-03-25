import { STATUS_CODE } from '../utils/statusCode.js';
import { fetchMetadataArray } from '../utils/fetchMetadataArray.js';
import {QueryUser,QuerySeache} from "../repositories/getUserQuery.js";

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
    try {
        const infoUser = await QuerySeache();
        return res.send(infoUser.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

export {getUserById, searche}