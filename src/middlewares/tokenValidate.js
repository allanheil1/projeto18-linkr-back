import jwt from 'jsonwebtoken';

export const tokenValidate = async (req, res, next) => {
  const { authorization } = req.headers;
  const secretKey = process.env.SECRET_KEY;
  const token = authorization?.split(' ')[1]?.trim();
  if (!token) return res.status(401).send('Faça login para continuar');
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId;

    res.locals.userId = userId;
    next();
  } catch (error) {
    return res.status(401).send('Faça login para continuar');
  }
};
