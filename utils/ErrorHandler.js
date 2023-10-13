class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req?.originalUrl}`);
  res.status(404).json({success:false,notfound:true,message:"Not found"});
  next(error);
};

module.exports = {ErrorHandler,notFound};
