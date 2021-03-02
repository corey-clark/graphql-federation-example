const fetch = require("node-fetch");
const { ForbiddenError } = require("apollo-server");

const url = "https://gold.goodrx.com/api/v1/plans";

const Query = {
  getPlans: async () => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "GoodRx",
      },
    });

    return response.json();
  },
};

module.exports = { Query };
