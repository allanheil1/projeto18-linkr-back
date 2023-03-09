import joi from "joi";

const signUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  username: joi.string().min(1).required(),
  pictureUrl: joi.string().required()
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export { signUpSchema, signInSchema }