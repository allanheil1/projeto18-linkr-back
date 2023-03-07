const internalError = (error, res) => {
  console.log(error);

  return res.status(500).send("We're having server side problems, try again in a moment");
};

export default internalError;