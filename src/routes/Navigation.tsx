import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import { RegisterPage,FormikBasicPage,FormikYupPage,FormikComponents,FormikAbstracted, RegisterFormikPage, DynamicForm } from "../03-forms/pages"


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-component" activeClassName="nav-active" exact>Formik form</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup form</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components form</NavLink>
            </li>
            <li>
              <NavLink to="/FormikAbstracted" activeClassName="nav-active" exact>Formik Abstracted</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" activeClassName="nav-active" exact>Register formik form</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic form</NavLink>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formik-component">
            <FormikBasicPage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage/>
          </Route>
          <Route path="/formik-components">
            <FormikComponents/>
          </Route>
          <Route path="/FormikAbstracted">
            <FormikAbstracted/>
          </Route>
          <Route path="/register-formik">
            <RegisterFormikPage/>
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}