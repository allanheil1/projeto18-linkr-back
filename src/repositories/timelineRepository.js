import connection from '../database/database.js';

export const insertPost = async ({ userId, content, url }) => {
  return connection.query(
    `
    INSERT INTO posts (user_id, content, url)
    VALUES ($1, $2, $3)`,
    [userId, content, url]
  );
};

export const listPosts = async (offset) => {
  return connection.query(
    `
    SELECT u.id,p.id as post_id, u.name, u.photo, p.content, p.url
    FROM posts p
    JOIN users u
    ON u.id = p.user_id
    ORDER BY p.created_at DESC
    LIMIT 10
    OFFSET $1`,
    [offset]
  );
};
