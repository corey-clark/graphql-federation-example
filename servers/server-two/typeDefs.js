const { gql } = require("apollo-server");

const typeDefs = gql`
  type PlanResponse {
    plans: [Plan]
  }

  type Plan {
    coverage_type: String
    period: String
    price: String
  }

  type Query {
    getPlans: PlanResponse
  }
`;

module.exports = typeDefs;
