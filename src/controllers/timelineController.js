import chalk from 'chalk';
import { fetchMetadataArray } from '../utils/fetchMetadataArray.js';
import internalError from '../utils/internalError.js';
import { insertPost, listPosts, countNewPosts, checkFallowsAnyone } from '../repositories/timelineRepository.js';

export const getPosts = async (req, res) => {
  const { offset = 0, limit = 10 } = req.Params;
  const userId = res.locals.userId;
  console.log(chalk.cyan('GET /timeline'));

  try {
    const { rows: posts } = await listPosts({ offset, limit, userId });

    const {rows: follows} = await checkFallowsAnyone(userId)
    const followsSomeone = follows[0].follows_someone

    const metadataArray = await fetchMetadataArray(posts);
    return res.status(200).send({ metadataArray, followsSomeone });
  } catch (error) {
    internalError(error, res);
  }
};

export const newPost = async (req, res) => {
  const { url, content = '' } = req.Params;
  const userId = res.locals.userId;
  console.log(chalk.cyan('POST /timeline'));

  try {
    await insertPost({ userId, url, content });
    return res.sendStatus(201);
  } catch (error) {
    internalError(error, res);
  }
};

export const checkNewPost = async (req, res) => {
  const { lastPostCreatedAt, postId } = req.Params;
  const lastPostCreatedAtFormatted = new Date(lastPostCreatedAt);
  const userId = res.locals.userId;
  try {
    const { rows: posts } = await countNewPosts(lastPostCreatedAtFormatted, userId, postId);
    return res.status(200).send(posts[0].new_posts_count);
  } catch (error) {
    internalError(error, res);
  }
};
