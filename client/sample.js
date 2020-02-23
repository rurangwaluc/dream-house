import React, { Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
// import { itemTotal } from "./cartHelpers";
import { signout, isAuthenticated } from "../auth";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#ff9900" };
//   } else {
//     return { color: "#ffffff" };
//   }
// };


const Menu = ({ history }) => {
  const authLinks = (
    <ul>
      <li>
        <Link className=" bg-dark p-3 " to="/">Home</Link>
      </li>
      <li>
        <Link className=" bg-dark p-3 " to="/properties">Properties</Link>
      </li>

      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm bg-dark p-3">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={signout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm bg-dark p-3">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className=" bg-dark p-3 " to="/properties">
          Properties
        </Link>
      </li>
      <li >
        <Link className="bg-dark p-3" to="/register">Register</Link>
      </li>
      <li >
        <Link className="  bg-dark p-3" to="/login"> Login </Link>
      </li>


      <li>
        <Link className=" bg-dark p-3 " to="/about">About</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 id="h1">
        <Link className="text-light" to="/">
          DreamHome
        </Link>
      </h1>

      {(
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};


export default withRouter(Menu);
