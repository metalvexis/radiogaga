

export class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err, res) => {
  const { statusCode, message } = err;

  let status = statusCode ? statusCode : 500;

  res.status(status).json({
    status: "error",
    statusCode,
    message
  });
};
