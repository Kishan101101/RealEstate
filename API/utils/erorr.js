//this is for showing warning or erorr which is not actual erorr like password
export const errorHndler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
