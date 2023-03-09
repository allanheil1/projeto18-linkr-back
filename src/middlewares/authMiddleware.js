import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { STATUS_CODE } from '../utils/statusCode.js';
import { validateEmailExists } from '../repositories/authRepository.js';

dotenv.config();

async function signInValidation(req, res, next) {

    const { email, password } = req.body;

    let signInData;

    try{

        const userExists = await validateEmailExists(email);
    
        if(userExists.rowCount === 0){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }
    
        const passwordCorrect = bcrypt.compareSync(password, userExists.rows[0].password);
    
        if(!passwordCorrect){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }
    
        if(userExists.rowCount > 0 && passwordCorrect){
            signInData = {
                email: email,
                password: userExists.rows[0].password,
                id: userExists.rows[0].id,
                photo: userExists.rows[0].photo
              };
        }
    
        res.locals = signInData;
    
        next();

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