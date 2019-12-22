const expess=require ('express');
const graphqlHTTP=require("express-graphql");
const schema=require('../schema/schema');
const mongoose=require('mongoose');
    
const app=expess();
const PORT=3005;

mongoose.connect('mongodb+srv://Bodya:12345@graphql-tutorial-iaxx8.mongodb.net/graphql-tutorial?retryWrites=true&w=majority',{useNewUrlParser:true});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

const dbConnection=mongoose.connection;
dbConnection.on('error',err=>console.log(`Connection error: ${err}`));
dbConnection.once('open',()=>console.log("Connection to DB!!!"))

app.listen(PORT,err=>{
    err ? console.log(error) : console.log("Server started!");

});