"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import Layout from "./components/Layout";
import Login from "./components/pages/login";
import Terriroty from "./components/pages/territory";
import Doctor from "./components/pages/doctor";
import Message from "./components/pages/selectMessage";
import PrintJsPdf from "./components/pages/printJsPdf";
import NotFoundPage from "./components/NotFoundPage";

const routes = (
  <Route path="/">
    <IndexRoute component={Login} />
    <Route path="/" component={Layout}>
      <Route path="/area" component={Terriroty} />
      <Route path="/doctor" component={Doctor} />
      <Route path="/message" component={Message} />
      <Route path="/printJsPdf" component={PrintJsPdf} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
