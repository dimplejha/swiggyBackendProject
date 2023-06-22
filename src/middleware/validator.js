const validInput = (value) => {
  if (typeof value === null || typeof value === undefined) return false;
  if (typeof value === 'string' && value.trim().length === 0) return false;
  return true;
};

const validateInputs = (req) => {
  const { title, firstName, lastName, email, password, mobile, DOB, gender } =
    req.body;

  if (!validInput(title)) {
    return { field: 'title', message: 'Invalid title' };
  }
  if (!validInput(firstName)) {
    return { field: 'firstName', message: 'Invalid firstName' };
  }
  if (!validInput(lastName)) {
    return { field: 'lastName', message: 'Invalid lastName' };
  }
  if (!validInput(email)) {
    return { field: 'email', message: 'Invalid email' };
  }
  if (!validInput(password)) {
    return { field: 'password', message: 'Invalid password' };
  }
  if (!validInput(mobile)) {
    return { field: 'mobile', message: 'Invalid mobile no' };
  }
  if (!validInput(DOB)) {
    return { field: 'DOB', message: 'Invalid DOB format' };
  }
  if (!validInput(gender)) {
    return { field: 'gender', message: 'Invalid gender' };
  }

  return null; // Indicates all inputs are valid
};

module.exports = { validInput, validateInputs };
