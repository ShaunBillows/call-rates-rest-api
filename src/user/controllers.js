const Rate = require("./model");

exports.readRates = async (req, res) => {
  console.log("Request recieved readRates.");
  try {
    if (!req.header("region")) {
      throw new Error("No query detected - 'region' is required in the request header.")   
    }
    const result = await Rate.find({ Country: new RegExp(req.header("region")) });
    console.log(result);
    res.status(200).send({ result });
    if (!result) {
      throw new Error("No documents found.")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
}
