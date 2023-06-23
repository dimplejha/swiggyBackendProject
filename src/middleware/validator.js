const mongoose = require('mongoose');

const isValidInput = (req) => {
  if (typeof req === null || typeof req === 'undefined') return false;
  if (typeof req === 'string' && req.trim().length === 0) return false;
  return true;
};

const isValidRequestBody = (req) => {
  return Object.keys(req).length > 0;
};

const char = function (value) {
  return /^[A-Za-z\s]+$/.test(value);
};

const isRightFormatemail = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const isvalidMobileNumber = function (mobile) {
  return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobile);
};

const isValidObjectId = function (ObjectId) {
  return mongoose.Types.ObjectId.isValid(ObjectId);
};

const isValidEnum = function (value) {
  let enumValues = [
    'Mr',
    'Mrs',
    'Miss',
    'Ms',
    'Master',
    'Dr',
    'Prof',
    'Rev',
    'Other',
    'Male',
    'Female',
  ];

  return enumValues.includes(value);
};

const isValidPassword = function (password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
};

const isValidDate = function (date) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
};

const validateInputs = (req) => {
  const {
    title,
    firstName,
    lastName,
    email,
    password,
    mobile,
    DOB,
    gender,
    address,
  } = req.body;

  if (Object.keys(req.body).length === 0) {
    // return res.status(400).send({ message: 'please provide data' });
    return { field: 'req.body', message: 'data in required' };
  }

  if (!isValidInput(title)) {
    return { field: 'title', message: 'Title is required' };
  }

  if (!isValidEnum(title)) {
    return {
      field: 'title',
      message:
        'Title must include Mr , Mrs, Miss, Ms , Master, Dr, Prof, Rev, Other only',
    };
  }

  if (!isValidInput(firstName)) {
    return { field: 'firstName', message: 'firstName is required' };
  }

  if (!char(firstName)) {
    return { field: 'firstName', message: 'firstName must be string' };
  }

  if (!isValidInput(lastName)) {
    return { field: 'lastName', message: 'lastname is required' };
  }

  if (!char(lastName)) {
    return { field: 'lastName', message: 'lastName must be string' };
  }

  if (!isValidInput(email)) {
    return { field: 'email', message: 'Email is required' };
  }

  if (!isRightFormatemail(email)) {
    return {
      field: 'email',
      message: 'Email must be in right formate. Example : abc@gmail.com',
    };
  }

  if (!isValidInput(password)) {
    return { field: 'password', message: 'password is requied' };
  }

  if (!isValidPassword(password)) {
    return {
      field: 'password',
      message: 'password must be in right formate. Example : Abc@123',
    };
  }

  if (!isValidInput(mobile)) {
    return { field: 'mobile', message: 'mobile no is required' };
  }

  if (!isvalidMobileNumber(mobile)) {
    return {
      field: 'mobile',
      message: 'mobile no must be in right formate. Example: 9213434271',
    };
  }

  if (!isValidInput(DOB)) {
    return { field: 'DOB', message: 'DOB is required' };
  }

  if (!isValidDate(DOB)) {
    return {
      field: 'DOB',
      message: 'DOB must be in right formate. Example: 1998-12-12',
    };
  }

  if (!isValidInput(gender)) {
    return { field: 'gender', message: 'gender is required' };
  }

  if (!isValidEnum(gender)) {
    return {
      field: 'gender',
      message: 'gender must include Male Female,Other',
    };
  }

  if (!isValidInput(address)) {
    return { field: 'address', message: 'address is required' };
  }

  if (!isValidRequestBody(req.body)) {
    return { field: 'body', message: 'request body should not be empty' };
  }

  return null; // Indicates all inputs are valid
};

module.exports = { validateInputs };
