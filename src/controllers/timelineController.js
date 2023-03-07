import chalk from 'chalk';
import internalError from '../utils/internalError.js';
import { insertPost } from '../repositories/timelineRepository.js';

export const getPosts = async (req, res) => {};

export const newPost = async (req, res) => {
  const { url, content = null } = req.Params;
  const { id } = req.headers;
  console.log(chalk.cyan('POST /timeline'));

  try {
    await insertPost({ id, url, content });

    return res.sendStatus(201);
  } catch (error) {
    internalError(error, res);
  }
};
