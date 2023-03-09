import connection from "../database/database.js";
import s from "../utils/statusCode.js";

export async function getLikes(req, res){
    const {id} = req.params;

    try{
        const data= await connection.query(
            `SELECT * FROM posts_likes WHERE post_id=$1`,
            [id]
        );

        const likes=data.rowCount;

        res.status(s.OK).send({likes});
    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}

export async function like(req, res){

}

export async function dislike(req, res){

}