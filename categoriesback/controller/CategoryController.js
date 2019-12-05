const details = require("../modals/details.modal");
const httpStatus = require("http-status");

exports.createCategories = async (req, res, next) => {
  try {
    const body = req.body;
    const name = body.name;
    const products = body.products;
    const prodInSc = body.prodInSc;
    const visible = body.visible;

    Details = await new details({
      name,
      products,
      prodInSc,
      visible
    });
    const detail = await Details.save(); 
    return res
      .sendStatus(httpStatus.OK)
      .json({ message: "Details Saved Successfully", detail: detail });
  } catch (err) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
};
exports.getCategories = async (req, res, next) => {
  try {
    const detail = await details.find();
    res.json({ detail: detail });
  } catch (err) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
};
exports.updateCats = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Id is missing" });
    }
    if (!body) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Details needs to be filled" });
    }
    const detail = await details.findByIdAndUpdate(
      req.params.id,
      {
        $set: body
      },
      { new: true }
    );
    
    if (detail) {
      res.status(httpStatus.OK).json({
        message: "Details Updated Successfully",
        status: "success",
        details: detail
      });
    }
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
      }
};
