import express from 'express';
import customerRoute from "../customer/customerRoute";
import userRoute from "../user/userRoute";

const app = express();

app.use('/customers', customerRoute);
app.use('/users', userRoute);

module.exports = app;