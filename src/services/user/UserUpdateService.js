const UserUpdateService = async (request, dataModel) => {
  try {
    let data = await dataModel.updateOne(
      { email: request.headers["email"] },
      request.body
    );

    if (data) {
      return { status: "success", data: data };
    }
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = UserUpdateService;