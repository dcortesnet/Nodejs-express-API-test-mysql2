const userModel = require('../models/user.model');

exports.getUsers = async (req, res) => {
  const users = await userModel.getAll();
  return res.status(200).json({users});
};