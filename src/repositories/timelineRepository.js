import connection from "../database/database.js";

export const insertPost = async ({id, content, url}) => {
  return connection.query(`
  INSERT INTO posts (user_id, content, url)
  VALUES ($1, $2, $3), [id, content, url]
  `)
}