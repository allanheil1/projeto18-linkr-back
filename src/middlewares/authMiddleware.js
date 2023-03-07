import { STATUS_CODE } from '../utils/statusCode.js';

async function signInValidation(req, res, next) {

    try{

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}

async function signUpValidation(req, res, next) {

    try{

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}


export { signInValidation, signUpValidation }