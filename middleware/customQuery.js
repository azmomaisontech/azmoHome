const customQuery = (model, populate) => async (req, res, next) => {
  let query;

  //Create an object of the req.query
  let reqQuery = { ...req.query };

  // Remove certain fields from the req.query list, so that we can create a custom query for them
  const removedFields = ["select", "sort", "page", "limit"];

  removedFields.forEach(field => delete reqQuery[field]);

  //Converting to Json string
  let queryString = JSON.stringify(reqQuery);

  //Create special operators like $gte, $lte using regEX
  queryString = queryString.replace(/\b(lte|lt|gte|gt|in)\b/g, match => `$${match}`);

  //querying the DB
  query = model.find(JSON.parse(queryString));

  //To perform custom queries

  // For Select
  if (req.query.select) {
    let fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // For sort
  if (req.query.sort) {
    let sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-addedAt");
  }

  //For Pagination
  const page = parseInt(req.query.page || 1, 10);
  const limit = parseInt(req.query.limit || 10, 10);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.estimatedDocumentCount();

  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  //Sending a response to the client
  const result = await query.select("-__v");

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.customQuery = {
    success: true,
    count: result.length,
    pagination,
    data: result
  };

  next();
};

module.exports = customQuery;
