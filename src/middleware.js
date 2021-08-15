const notFound = (req, res, next) => {
  const error = new error(`Not Found- ${req.originalUrl}`);
  res.send(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: "Not found",
    stack: error.stack,
  });
};
module.exports = {
  notFound,
  errorHandler,
};
