const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "drugs", url: "http://localhost:4001/" },
    { name: "drug", url: "http://localhost:4002/" },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Gateway ready at ${url}`);
});
