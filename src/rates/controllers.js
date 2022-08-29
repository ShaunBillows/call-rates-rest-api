const Rate = require("./model");

exports.readRates = async (req, res) => {
  console.log("Request recieved readRates.");
  try {
    if (!req.header("region") && !req.header("prefix")) {
      throw new Error("No query detected - 'region' or 'prefix' is required in the request header.")   
    }
    let result
    if (req.header("prefix")) {
      result = await Rate.find({ Prefix: new RegExp(req.header("prefix")) }) // Substring search, case sensitive.
    } else {
      result = await Rate.find({ Country: new RegExp(req.header("region", 'i')) }); // Substring search, case insensitive.
    }
    if (!result || result.length === 0) {
      throw new Error("No documents found.")
    }
    console.log(result);
    res.status(200).send({ result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
}
