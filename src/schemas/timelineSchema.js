import Joi from 'joi';

export const postSchema = Joi.object({
  content: Joi.string().max(280).allow(''),
  url: Joi.string().uri().required()
});

export const listPostSchema = Joi.object({
  offset: Joi.number().integer().optional(),
  limit: Joi.number().integer().optional()
});

export const checkNewPostsSchema = Joi.object({
  lastPostCreatedAt: Joi.date().required(),
  postId: Joi.number().required()
});
