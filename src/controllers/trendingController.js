import connection from "../database/database.js";
import { STATUS_CODE } from "../utils/statusCode.js";

export async function getTrending(req, res) {
    try {
        const trending = await connection.query(`SELECT COUNT(post_hashtag.hashtag_id), hashtag.name FROM post_hashtag JOIN hashtag ON post_hashtag.hashtag_id = hashtag.id GROUP BY hashtag.id LIMIT 10;`)
        return res.status(STATUS_CODE.OK).send(trending.rows)

    } catch (err) {
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}

export async function postTrending(req, res){
    /*const { hashtag, post_id, hashtag_id } = req.body
    const trending = hashtag?.replace("#", "")

    try{
        const hashtagRegistered = await connection.query(`SELECT * FROM hashtag WHERE name =$1`, [trending])
        if(hashtagRegistered.rows.length === 0) {
            await connection.query(`INSERT INTO post_hashtag (post_id, hashtag_id) VALUES ($1,$2);`, [post_id, hashtag_id])
            return res.sendStatus(STATUS_CODE.OK) 
        } else {
            await connection.query(`INSERT INTO hashtag (name) VALUES ($1);`, [trending])
            await connection.query(`INSERT INTO post_hashtag (post_id, hashtag_id) VALUES ($1,$2);`, [post_id, hashtag_id])
            return res.sendStatus(STATUS_CODE.OK)
        }
    }catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }*/
}

export async function getHashtagPosts(req,res){
    const { hashtag } = req.params
    try{
        const trendingPosts = await connection.query(`select 
        users.name, 
        users.photo, 
        posts.content, 
        posts.url 
        from post_hashtag 
        JOIN posts ON posts.id = post_hashtag.post_id 
        JOIN hashtag ON hashtag.id = post_hashtag.hashtag_id 
        JOIN users ON posts.user_id = users.id
        WHERE hashtag.name=$1;
        `, [hashtag])
        return res.status(STATUS_CODE.OK).send(trendingPosts.rows)
    }catch(err){
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}