const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ReturnsSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    CustomerID: { type: ObjectId },
    VatTax: { type: Number },
    Discount: { type: Number },
    OtherCost: { type: Number },
    ShippingCost: { type: Number },
    GrandTotal: { type: Number },
    Note: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ReturnsModel = mongoose.model("returns", ReturnsSchema);

module.exports = ReturnsModel;