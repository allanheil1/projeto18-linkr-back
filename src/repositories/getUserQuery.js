import connection from "../database/database.js"

export const QueryUser =  (userId)=>{
    return connection.query(`
    SELECT u.id, p.id as post_Id, u.name, u.photo, p.content, p.url, p.created_at, 
    COUNT(c.id) as comment_count, COUNT(r.id) as repost_count
    FROM posts p
    JOIN users u ON u.id = p.user_id
    LEFT JOIN post_comments c ON c.post_id = p.id
    LEFT JOIN repost r ON r.post_id = p.id
    WHERE p.user_id = $1
    GROUP BY p.id, u.id
    ORDER BY p.created_at DESC
`,[userId])
}
export const QuerySeache = (userId) => {
  return connection.query(`select * from users full join follows on users.id = follows.followed_id where follows.user_id = $1
   union
   select * from users full join follows on users.id = follows.followed_id where follows.user_id is null
  order by user_id;`, [userId]);
};
