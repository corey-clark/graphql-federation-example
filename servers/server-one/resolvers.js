const fetch = require("node-fetch");
const { ForbiddenError } = require("apollo-server");

const url = "https://www.goodrx.com/api/v4/drugs";

const Query = {
  getDrugById: async (root, args) => {
    const response = await fetch(`${url}/${args.id}`, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "GoodRx",
      },
    });

    return response.json().then((x) => x.drug);
  },
};

module.exports = { Query };
