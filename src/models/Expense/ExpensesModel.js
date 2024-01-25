const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const expenseSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    TypeID: { type: ObjectId },
    Amount: { type: Number },
    Note: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ExpenseModel = mongoose.model("expenses", expenseSchema);

module.exports = ExpenseModel;