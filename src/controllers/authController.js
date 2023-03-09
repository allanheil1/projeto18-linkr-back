import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { STATUS_CODE } from '../utils/statusCode.js';
import { insertUser, findUser } from '../repositories/authRepository.js';

dotenv.config();

async function signUp(req, res){

    const { email, password, username, pictureUrl } = res.locals;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    try{

        await insertUser(email, encryptedPassword, username, pictureUrl);

        return res.sendStatus(STATUS_CODE.CREATED);

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}

async function signIn(req, res){

    const { email, password, id } = res.locals;

    const secret = process.env.SECRET;

    const payload = {
        userId: id
    }

    const token = jwt.sign(payload, secret);

    try{

        await findUser(email, password);

        return res.status(200).send(token);

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }

}

export { signUp, signIn };
