import connection from "../database/database.js";
import  {STATUS_CODE} from "../utils/statusCode.js";

export async function del(req, res){
    const {id}= req.params;
    const userId= res.locals.userId;

    try{
        const data= await connection.query(
            `SELECT * FROM posts WHERE id = $1`,
            [id]
        );

        if(data.rowCount === 0){
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }

        const post = data.rows[0];

        if(post.user_id!== userId){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }

        await connection.query(
            `DELETE FROM post_likes WHERE post_id=$1`,
            [id]
        );
        
        await connection.query(
            `DELETE FROM post_hashtag WHERE post_id=$1`,
            [id]
        );

        await connection.query(
            `DELETE FROM posts WHERE id=$1`,
            [id]
        );

        res.sendStatus(STATUS_CODE.NO_CONTENT);
    }catch(err){
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err.message);
    }
}

export async function edit(req, res){
    const {id} = req.params;
    const {userId} = res.locals.userId;
    const {newContent} = req.body;

    try{
        const data= await connection.query(
            `SELECT * FROM posts WHERE id=$1`,
            [id]
        );

        if(data.rowCount===0){
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }

        const post= data.rows[0];

        if(post.user_id!==userId){
            return res.sendStatus(STATUS_CODE.BAD_REQUEST);
        }

        await connection.query(
            `UPDATE posts SET content=$1 WHERE id=$2`,
            [newContent, id]
        )
    }catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR.send(err.message));
    }
}