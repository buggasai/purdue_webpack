'use strict';

import React from 'react';
import { Link, browserHistory } from 'react-router';

let tId = 0;
let pId = 0;
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    sessionStorage.clear();
    browserHistory.push("/");
  }
  render() {
    tId = this.props.territoryId;
    pId = this.props.doctorId;
    return (
      <div>
        <div className="container-fluid">
          <header>
            <div className="container">
              <div className="col-md-12 bdrBtm">
                <div className="  logo">
                  <a href="/">
                    <img src="/img/purdue_logo.png" title="Purdue" width="125" />
                  </a>
                </div>
                <div id="divMaster">
                  <nav className="col-md-10 right nomrgs">
                    <ul id="ullist1">
                      <li data-itemtype="0">
                        <Link
                          style={{ cursor: "pointer" }}
                          className="selected"
                          to={`/area`}
                        >
                          Select Area
                      </Link>
                      </li>
                      <li data-itemtype="2" id="li1">
                        <Link
                          style={{ cursor: "pointer" }}
                          className="selectedFirstdoc"
                          to={`/doctor`}
                        >
                          Select HCP
                        </Link>
                      </li>
                      <li data-itemtype="1" id="li2">
                        <Link
                          style={{ cursor: "pointer" }}
                          className="selectedFirstdoc"
                          to={`/message`}
                        >
                          Select Message
                        </Link>
                      </li>
                      <li data-itemtype="3" id="li3">
                        <Link
                          style={{ cursor: "pointer" }}
                          className="prntDmd"
                          to={`/printJsPdf`}
                        >
                          Print on Demand
                        </Link>
                      </li>
                      <li className="links nomrgs ">
                        <a
                          href="javascript:void(0)"
                          className="logout"
                          title="Logout"
                          onClick={this.logOut}
                        />
                      </li>
                      <li className="links nomrgs ">
                        <a href="#" className="faq" title="Contact Us" />
                      </li>
                      <li className="links nomrgs ">
                        <div id="dvNotify" className="notification">
                          <img src="/img/notification.png" />
                          <span id="spNotify">2</span>
                        </div>
                        <a
                          href="#"
                          id="aBook"
                          className="book"
                          title="Resource Icon"
                        />
                        <div className="arrow-up" />
                        <div id="book-body">
                          <ul className="book">
                            <li>
                              <a href="#">User Guide</a>
                            </li>
                            <li>
                              <a href="#">FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="clear" />
              </div>
            </div>
            <div className="clear" />
          </header>
          <div className="app-content">{this.props.children}</div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
