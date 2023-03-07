import { STATUS_CODE } from '../utils/statusCode.js';

async function signUp(req, res){

    try{

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}

async function signIn(req, res){

    try{

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}

export { signUp, signIn };
