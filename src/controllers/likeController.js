import connection from "../database/database.js";
import s from "../utils/statusCode.js";

export async function getLikes(req, res){
    const {id} = req.params;

    try{
        const post= await connection.query(
            `SELECT * FROM posts WHERE id=$1`,
            [id]
        );

        if(post.rowCount===0){
            return res.sendStatus(s.NOT_FOUND);
        }

        const data= await connection.query(
            `SELECT * FROM post_likes WHERE post_id=$1`,
            [id]
        );

        const likes=data.rowCount;

        res.status(s.OK).send({likes});
    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}

export async function like(req, res){
    const {id} = req.params;
    const userId= res.locals.userId;
    
    try{
        const post= await connection.query(
            `SELECT * FROM posts WHERE id=$1`,
            [id]
        );

        if(post.rowCount===0){
            return res.sendStatus(s.NOT_FOUND);
        }

        await connection.query(
            `INSERT INTO post_likes (user_id, post_id) VALUES ($1, $2)`,
            [userId,id]
        );

        res.sendStatus(s.CREATED);
    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}

export async function dislike(req, res){
    const {id} = req.params;
    const userId= res.locals.userId;

    try{
        const post= await connection.query(
            `SELECT * FROM posts WHERE user_id=$1 AND post_id=$2`,
            [userId,id]
        );

        if(post.rowCount===0){
            return res.sendStatus(s.NOT_FOUND);
        }

        await connection.query(
            `DELETE FROM posts WHERE user_id=$1 AND post_id=$2`,
            [userId,id]
        );

        res.sendStatus(s.OK);
    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}