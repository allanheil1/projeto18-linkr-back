import Joi from 'joi';

export const newContentSchema=Joi.object({
    content: Joi.string().required()
})