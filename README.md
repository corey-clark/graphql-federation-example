# graphql-federation-example
Quick example of federated graphql servers

This application currently federates the following APIs:

- List of available plans 
- Drug by ID V4

Clone the repo, then use the following steps to run on your local:

- git clone git@github.com:corey-clark/graphql-federation-example.git

- yarn bootstrap
- yarn start

This will fire up two different graphql servers, each containing their own individual schemas.
Then it will start a third process called the gateway (also a graphql server), which is used to federate the two remote schemas together.

If the `yarn start` command gives you any trouble feel free to start up each graphql server individually by running `yarn start` in each graphql server's root directory. If you start them all manually, order matters, make sure you start up the gateway last.
