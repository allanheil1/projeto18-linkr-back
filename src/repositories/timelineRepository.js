import connection from '../database/database.js';

export const insertPost = async ({ userId, content, url }) => {
  return connection.query(
    `
    INSERT INTO posts (user_id, content, url)
    VALUES ($1, $2, $3)`,
    [userId, content, url]
  );
};

export const listPosts = async ({ offset, limit, userId }) => {
  return connection.query(
    `
  SELECT u.id, p.id AS post_id, u.name, u.photo, p.content, p.url, p.created_at,
    EXISTS(SELECT 1 FROM follows WHERE user_id = $3 LIMIT 1) AS follows_anyone,
    (SELECT COUNT(*) FROM post_comments pc WHERE pc.post_id = p.id) AS comment_count
  FROM
    users u
    LEFT JOIN posts p ON p.user_id = u.id
    LEFT JOIN follows f ON f.followed_id = p.user_id OR f.user_id = p.user_id
  WHERE
    f.user_id = $3 or p.user_id = $3  -- id do usuário atual
  GROUP BY
    u.id, p.id
  ORDER BY
    p.created_at DESC
  LIMIT $2
  OFFSET $1;`,
    [offset, limit, userId]
  );
};

export const countNewPosts = async (lastPostCreatedAt, userId, postId ) => {
  return connection.query(
    `
    SELECT COUNT(p.user_id) AS new_posts_count
    FROM posts p
    LEFT JOIN follows f ON p.user_id = f.followed_id
    WHERE (p.user_id = $2 OR f.user_id = $2)
    AND p.created_at > $1
    AND p.id <> $3;
    `,
    [lastPostCreatedAt, userId, postId]
  );
};
