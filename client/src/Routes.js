import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import About from './core/About';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddStatus from './admin/AddStatus';
import AddProperty from './admin/AddProperty';
import Shop from './core/Shop';
import Property from './core/Property';
import Properties from './core/Properties';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageProperties from './admin/ManageProperties';
import UpdateProperty from './admin/UpdateProperty';
// import UpdateCategory from './admin/updateCategory';

const Routes = () => {
  return (

    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/about" exact component={About} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/status" exact component={AddStatus} />
        <AdminRoute path="/create/property" exact component={AddProperty} />
        <Route path="/property/:propertyId" exact component={Property} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/properties" exact component={Properties} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <PrivateRoute path="/admin/properties" exact component={ManageProperties} />
        <AdminRoute path="/admin/property/update/:propertyId" exact component={UpdateProperty} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


//                 <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />