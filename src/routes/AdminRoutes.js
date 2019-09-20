import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import AdminHome from '../components/admin/Home';
import AdminEmployee from '../components/admin/Employee';

export default function AdminRoutes(props) {
  return (
    <Fragment>
      <Route exact path={props.match.path + "/"} component={AdminHome} />
      <Route exact path={props.match.path + "/employee"} component={AdminEmployee} />
      Admin Routes
    </Fragment>
  );
};
