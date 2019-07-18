import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'

import Customers from './components/Customer/customers'
import CreateCustomer from './components/Customer/CreateCustomer'
import CustomerDetails from "./components/Customer/CustomerDetails";


// for custom  users
import Users from "./components/User/users";
import CreateUser from "./components/User/CreateUser";
import UserDetails from "./components/User/UserDetails";




const routing = () => (
    <div>
    <Switch>
    <Route exact path="/" component={Home} label="Home"/>

        <Route path="/customers" component={Customers} />
        <Route path="/customer/view" component={CustomerDetails} />
        <Route path="/customer/new" component={CreateCustomer} />

        <Route path="/users" component={Users} />
        <Route path="/user/new" component={CreateUser} />
        <Route path="/user/view" component={UserDetails} />
        



    </Switch>
    </div>
)
export default routing;