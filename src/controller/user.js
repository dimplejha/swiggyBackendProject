const userModel = require('../model/userModel');
const { validateInputs } = require('../middleware/validator');
const bcrypt = require('bcrypt');

const postData = async (req, res) => {
  console.log(req.body);

  const validationError = validateInputs(req);
  if (validationError) {
    return res.status(400).send({
      msg: validationError.message,
      field: validationError.field,
    });
  }

  try {
    const emailExists = await userModel.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).send({
        msg: 'Email is already in use',
        field: 'email',
      });
    }
    const hashedPasword = await bcrypt.hash(req.body.password, 10);

    const mobileExists = await userModel.findOne({ mobile: req.body.mobile });
    if (mobileExists) {
      return res.status(400).send({
        msg: 'mobile is already in use',
        field: 'mobile',
      });
    }

    // const data = await userModel.create(req.body);
    const data = await userModel.create({
      ...req.body,
      password: hashedPasword,
    });

    return res.status(201).send({ msg: 'User created successfully', data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: 'Failed to create user', error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await userModel.findOne({ email: req.body.email });
    if (!emailExists) {
      return res.status(400).send({
        msg: 'singup first',
        field: 'mobile',
      });
    }

    const hashedPassword = bcrypt.compareSync(password, emailExists.password);
    if (!hashedPassword) {
      return res.status(400).send({
        msg: 'Invalid password',
        field: 'password',
      });
    }
    return res
      .status(200)
      .send({ message: 'login successfully', data: emailExists });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: 'Failed to login user', error });
  }
};

const getData = async (req, res) => {
  const getData = await userModel.find();
  return res.send(getData);
};

const updateData = async (req, res) => {
  const { title, firstName, LastName, email, mobile, gender } = req.body;
  userId = req.params.id;
  const updateData = await userModel.findByIdAndUpdate(userId, req.body, {
    new: true,
  });
  return res.status(200).send(updateData);
};

const deleteData = async (req, res) => {
  userId = req.params.id;
  const deleteData = await userModel.findByIdAndDelete(userId);
  return res.status(200).send(deleteData);
};

const getPerticularData = async (req, res) => {
  //   const getData = await userModel.findOne({ age: 20 });
  //   const getData = await userModel.findOne({ age: { $eq: 50 } });
  const getData = await userModel.find({
    $and: [{ age: { $gte: 20 } }, { age: { $lte: 90 } }],
  });

  return res.send(getData);
};

module.exports = {
  postData,
  loginUser,
  getData,
  updateData,
  deleteData,
  getPerticularData,
};
