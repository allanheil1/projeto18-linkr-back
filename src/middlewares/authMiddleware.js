import dotenv from 'dotenv';

import { STATUS_CODE } from '../utils/statusCode.js';
import { validateEmailExists } from '../repositories/authRepository.js';

dotenv.config();

async function signInValidation(req, res, next) {

    try{

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}

async function signUpValidation(req, res, next) {

    const user = req.body;

    try{

        const userExists = await validateEmailExists(user.email);

        if(userExists.rowCount > 0){
            return res.sendStatus(STATUS_CODE.CONFLICT);
        }
    
        res.locals = user;
    
        next();

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}


export { signInValidation, signUpValidation };