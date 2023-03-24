import connection from "../database/database.js"

export const CommentRepository = (userId, postId, content) => {

    return connection.query(`
    INSERT INTO post_comments (user_id, post_id, "content")
VALUES ($1,$2, $3);
`, [userId, postId, content])
}
