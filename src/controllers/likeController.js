import connection from '../database/database.js';
import { STATUS_CODE } from '../utils/statusCode.js';

export async function getLikes(req, res) {

  const { postId }  = req.params;

  const userId = res.locals.userId;

  let userLiked = false;

  try {
    const post = await connection.query(`SELECT * FROM posts WHERE id=$1`, [postId]);

    if (post.rowCount === 0) {
      return res.status(STATUS_CODE.NOT_FOUND).send('Não encontrado');
    }
    const checkIfLiked = await connection.query(`SELECT * FROM post_likes WHERE post_id=$1 AND user_id=$2`, [postId, userId]);

    if (checkIfLiked.rowCount > 0) {
      userLiked = true;
    }

    const data = await connection.query(`SELECT * FROM post_likes WHERE post_id=$1`, [postId]);

    const likes = data.rowCount;
    res.status(STATUS_CODE.OK).send({ likes, userLiked });

  } catch (err) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(err.message);
  }
}

export async function like(req, res) {

  const { postId } = req.params;
  const userId = res.locals.userId;

  try {
    const post = await connection.query(`SELECT * FROM posts WHERE id=$1`, [postId]);

    if (post.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    const checkIfLiked = await connection.query(`SELECT * FROM post_likes WHERE post_id=$1 AND user_id=$2`, [postId, userId]);

    if (checkIfLiked.rowCount > 0) {
      return res.status(STATUS_CODE.CONFLICT).send('Already liked');
    }

    await connection.query(`INSERT INTO post_likes (user_id, post_id) VALUES ($1, $2)`, [userId, postId]);

    res.sendStatus(STATUS_CODE.CREATED);
  } catch (err) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(err.message);
  }
}

export async function dislike(req, res) {

  const { postId } = req.params;
  const userId = res.locals.userId;
  try {
    const post = await connection.query(`SELECT * FROM posts WHERE id=$1`, [postId]);

    if (post.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    await connection.query(`DELETE FROM post_likes WHERE user_id=$1 AND post_id=$2`, [userId, postId]);
    res.sendStatus(STATUS_CODE.OK);
  } catch (err) {
    console.log(err)
    return res.status(STATUS_CODE.SERVER_ERROR).send(err.message);
  }
}
