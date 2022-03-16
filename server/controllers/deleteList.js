/* eslint-disable no-unused-vars */
const { deleteListQuery } = require("../database/queries");

const deleteListController = (req, res) => {
  deleteListQuery(req.params.id);
};

module.exports = deleteListController;
