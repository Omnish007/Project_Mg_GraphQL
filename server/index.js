const express = require("express");
require("dotenv").config();
const app = express();
const connectDb = require("./config/db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

//connect to db
connectDb();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(5000, console.log("Server is running on port 5000"));
