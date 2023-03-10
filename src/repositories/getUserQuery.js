import connection from "../database/database.js"

export const QueryUser =  (userId)=>{
    
    return connection.query(`SELECT p.id, u.name, u.photo, p.content, p.url
      FROM posts p
      JOIN users u
      ON u.id = p.user_id
      WHERE p.user_id = $1
      ORDER BY p.created_at DESC
`,[userId])
}
export const QuerySeache = (name) => {
  return connection.query(`SELECT * FROM users;`);
};

