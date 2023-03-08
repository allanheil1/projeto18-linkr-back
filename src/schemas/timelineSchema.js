import Joi from 'joi';

export const postSchema = Joi.object({
  content: Joi.string().max(280).trim(),
  url: Joi.string().uri().required()
});

export const listPostSchema = Joi.object({
  offset: Joi.number().integer().min(0)
});
