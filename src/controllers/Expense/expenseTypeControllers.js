//data base import
const { mongoose } = require("mongoose");
const ExpenseTypesModel = require("../../models/Expense/ExpenseTypesModel");

// common services import
const CreateService = require("../../services/common/createService");
const DropDownService = require("../../services/common/dropDownService");
const ListService = require("../../services/common/listService");
const UpdateService = require("../../services/common/updateService");
const DeleteService = require("../../services/common/deleteService");
const CheckAssociateService = require("../../services/common/checkAssociateService");
const ExpenseModel = require("../../models/Expense/ExpensesModel");
const DetailsByIDService = require("../../services/common/detailsByIdService");

// Create ExpenseTypes
exports.CreateExpenseTypes = async (req, res) => {
  let result = await CreateService(req, ExpenseTypesModel);
  res.status(201).json(result);
};

// ExpenseTypes Details
exports.ExpenseTypesDetails = async (req, res) => {
  let result = await DetailsByIDService(req,ExpenseTypesModel);
  res.status(200).json(result);
};

// Update ExpenseTypes
exports.UpdateExpenseTypes = async (req, res) => {
  let result = await UpdateService(req, ExpenseTypesModel);
  res.status(200).json(result);
};

// ExpenseTypes List
exports.ExpenseTypesList = async (req, res) => {
  let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRex }];
  let result = await ListService(req, ExpenseTypesModel, SearchArray);
  res.status(200).json(result);
};

// ExpenseTypes DropDown
exports.ExpenseTypesDropDown = async (req, res) => {
  let result = await DropDownService(req, ExpenseTypesModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};


// Delete ExpenseTypes
exports.DeleteExpenseTypes = async (req, res) => {
  let DeleteId = req.params.id;
  let {ObjectId} = mongoose.Types;
  let CheckAssociate = await CheckAssociateService({TypeID:ObjectId(DeleteId)},ExpenseModel);

  if (CheckAssociate) {
    res.status(200).json({status: "associate", data: "Associate with Product"});
  } else {
    let result = await DeleteService(req, ExpenseTypesModel)
    res.status(200).json(result);
  }
};