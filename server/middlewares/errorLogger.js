import { handleError } from '/helpers/ErrorHandler.js';
export const errorLogger = ( err, req, res, next ) => {
  console.error(err.stack||err.message);
  handleError(err,res);
};