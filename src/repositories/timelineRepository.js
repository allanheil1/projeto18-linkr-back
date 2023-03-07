import connection from '../database/database.js';

export const insertPost = async ({ userId, content, url }) => {
  return connection.query(`
    INSERT INTO posts (user_id, content, url)
    VALUES ($1, $2, $3)`,
    [userId, content, url]
  );
};

export const listPosts = async (offset) => {
  return connection.query(`
    SELECT * FROM posts
    ORDER BY created_at DESC
    LIMIT 20
    OFFSET $1`,
    [offset]
  );
};
