import chalk from 'chalk';
import { fetchMetadataArray } from '../utils/fetchMetadataArray.js';
import internalError from '../utils/internalError.js';
import { insertPost, listPosts } from '../repositories/timelineRepository.js';

export const getPosts = async (req, res) => {
  const { offset = 0 } = req.Params;
  console.log(chalk.cyan('GET /timeline'));

  try {
    const { rows: posts, rowCount } = await listPosts(offset);

    if (rowCount === 0) return res.sendStatus(404);

    const metadataArray = await fetchMetadataArray(posts);
    return res.status(200).send({ metadataArray });
  } catch (error) {
    internalError(error, res);
  }
};

export const newPost = async (req, res) => {
  const { url, content = null } = req.Params;
  const userId = req.locals.userId;
  console.log({userId})
  console.log(chalk.cyan('POST /timeline'));

  try {
    await insertPost({ userId, url, content });

    return res.sendStatus(201);
  } catch (error) {
    internalError(error, res);
  }
};

export const editPost = async (req, res) => {};

export const deletePost = async (req, res) => {};
