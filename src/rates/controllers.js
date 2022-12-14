const Rate = require("./model");

exports.readRates = async (req, res) => {
  console.log("Request recieved readRates.");
  try {
    if (!req.query.page || !req.query.limit) {
      throw new Error("Missing fields.");
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
    let result;
    if (req.query.prefix) {
      result = await Rate.find({ Prefix: new RegExp(`^${req.query.prefix}`) }) // Substring search, starts with...
        .sort({ Prefix: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
    } else {
      result = await Rate.find({ Country: new RegExp(req.query.region, "i") }) // Substring search, case insensitive.
        .sort({ Country: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
    }
    if (!result || result.length === 0) {
      throw new Error("No documents found.");
    } else {
      console.log(result);
      res.status(200).send({ result });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
