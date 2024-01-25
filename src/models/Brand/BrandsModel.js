let mongoose = require("mongoose");
let brandSchema = new mongoose.Schema(
  {
    UserEmail:{type:String},
    Name:{type:String,unique:true},
    CreatedDate:{type:Date,default:Date.now()}
  },
  { versionKey: false }
);

let BrandModel = mongoose.model("brands", brandSchema);
module.exports = BrandModel;