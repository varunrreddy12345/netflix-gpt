export const checkValidData = (email, password) => {

  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid)
    return "Password must contain 8 characters and a number";

  return null;
};