const CheckAssociateService = async (QueryObj, Model) => {
  try {
    const data = await Model.aggregate([{ $match: QueryObj }]);
    // response
    return data.length > 0;
  } catch (error) {
    return false;
  }
};

module.exports = CheckAssociateService;