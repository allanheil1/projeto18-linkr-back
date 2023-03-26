import connection from "../database/database.js";
import  {STATUS_CODE} from "../utils/statusCode.js";

export async function repost(req, res) {
    const userId=res.locals.userId;
    const {postId}=req.params;

    try{
        await connection.query(
            `INSERT INTO repost (user_id, post_id) VALUES ($1, $2)`,
            [userId, postId]
        );

        return res.sendStatus(STATUS_CODE.CREATED);
    }catch(err){
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err.message);
    }
}