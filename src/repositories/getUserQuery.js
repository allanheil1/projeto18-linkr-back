import connection from "../database/database.js"

export const QueryUser =  (userId)=>{
    
    return connection.query(`SELECT 
    users.id as id, 
    users.name as name, 
    users.photo as photo, 
    json_agg(
      json_build_object(
        'id', posts.id, 
        'url', posts.url, 
        'likes', (
          SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id = posts.id
        ), 
        'hashtags', (
          SELECT array_agg(hashtag.name) FROM post_hashtag JOIN hashtag ON post_hashtag.hashtag_id = hashtag.id WHERE post_hashtag.post_id = posts.id
        )
      )
    ) as my_posts
  FROM users 
    JOIN posts ON users.id = posts.user_id 
  WHERE users.id = $1
  GROUP BY users.id, users.name, users.photo;
`,[userId])
}

export const QuerySeache = (name) => {
  return connection.query(`SELECT * FROM users;`);
};

