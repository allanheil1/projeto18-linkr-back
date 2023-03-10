import jwt from 'jsonwebtoken';

export const tokenValidate = async (req, res, next) => {
  const { authorization } = req.headers;
  const secretKey = process.env.SECRET_KEY;
  const token = authorization?.split(' ')[1]?.trim();
  if (!token) return res.status(401).send('Faça login para continuar');
  console.log({token})
  try {
    const decodedToken = jwt.verify(token, secretKey);
    console.log({decodedToken})
    const userId = decodedToken.userId;
    console.log({ userId });
    res.locals.userId = userId;
    next();
  } catch (error) {
    return res.status(401).send('Faça login para continuar');
  }
};
