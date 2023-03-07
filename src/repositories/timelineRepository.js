import connection from '../database/database.js';

export const insertPost = async ({ id, content, url }) => {
  return connection.query(`
    INSERT INTO posts (user_id, content, url)
    VALUES ($1, $2, $3)`,
    [id, content, url]
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
