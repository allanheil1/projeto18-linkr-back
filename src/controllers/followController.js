import connection from "../database/database.js";
import { STATUS_CODE } from "../utils/statusCode.js";

export async function followRequest(req, res){
    const userId = res.locals.userId
    const{ id }= req.params

    try{
        await connection.query(`INSERT INTO follows (user_id, followed_id) VALUES ($1, $2);`, [userId, id])
        return res.sendStatus(STATUS_CODE.OK)
    } catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}
export async function unfollowRequest(req, res){
    const userId = res.locals.userId
    const {id} = req.params

    try{
        await connection.query(`DELETE FROM follows WHERE user_id = $1 AND followed_id= $2;`, [userId, id])
        return res.sendStatus(STATUS_CODE.OK)
    } catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}

export async function checkFollow(req, res){
    const userId = res.locals.userId
    const {id} = req.params
    if(userId == id) return res.send("same")
    try{
        const userFollows = await connection.query(`SELECT * FROM follows WHERE user_id = $1 AND followed_id= $2;`, [userId, id])
        if (userFollows.rows.length > 0) return res.send(true)
        else return res.send(false)
    }catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);

    }
}