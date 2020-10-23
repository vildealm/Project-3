


const express = require ('express');
const graphqlHTTP = require('react-graphql');
const schema = require ('./schema.graphql')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphql:
    true
})
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('server'));
