import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import SignOut from './auth/SignOut'
const Navbar = ({ session }) => (
  <nav>
    {session && session.getCurrentUser ? <NavbarAuth session={session}/> : <NavbarUnAuth />}
  </nav>
);

const NavbarAuth = ({ session }) => (
  <Fragment>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" exact>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink to="/recipe/add" exact>
          Add Recipe
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact>
          Profile
        </NavLink>
      </li>
      <SignOut />
    </ul>
    <h4>
      Welcome, <strong>{session.getCurrentUser.username}</strong>
    </h4>
  </Fragment>
);

const NavbarUnAuth = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" exact>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" exact>
          Signin
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" exact>
          signup
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
