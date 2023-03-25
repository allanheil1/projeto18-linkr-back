import connection from "../database/database.js"

export  const CommentQuery = ({userId, postId, comment}) => {
    return connection.query(`
    INSERT INTO post_comments (user_id, post_id, "content")
    VALUES ($1, $2, $3)`,[userId, postId, comment])
}

export const GetCommentQuery =({id})=>{
    const idPost = parseInt(id)
    return connection.query(`SELECT pc.*, u.photo, u.name 
    FROM post_comments pc 
    JOIN users u ON pc.user_id = u.id 
    WHERE pc.post_id = $1
    ORDER BY pc.created_at DESC`,[idPost])
}
