const DeleteService = async (req, Model) => {
  try {
    let DeleteID = req.params.id;
    let UserEmail = req.headers["email"];

    // Second Process
    let QueryObj = {};
    QueryObj["_id"] = DeleteID;
    QueryObj[UserEmail] = UserEmail;

    // First DataBase Process
    let Delete = await Model.deleteMany(QueryObj);

    // response
    return {status: "success", delete: Delete};

  } catch (error) {
    return { status: "fail", data: error.message };
  }
};

module.exports = DeleteService;
