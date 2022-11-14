const express = require("express");
require("dotenv").config();
const cors = require("cors")
const app = express();
const connectDb = require("./config/db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

//connect to db
connectDb();

app.use(cors())

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(5000, console.log("Server is running on port 5000"));
