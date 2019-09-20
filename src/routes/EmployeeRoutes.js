import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import EmployeeHome from '../components/employee/Home';
import EmployeeView from '../components/employee/View';

export default function EmployeeRoutes(props) {
  return (
    <Fragment>
      <Route exact path={props.match.path + "/"} component={EmployeeHome} />
      <Route exact path={props.match.path + "/view"} component={EmployeeView} />
      Employee Routes
    </Fragment>
  );
};
