"use strict";
import React from "react";
import { Link, browserHistory } from "react-router";
import Global from "../../utility/global";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.VerifyEmail = this.VerifyEmail.bind(this);
  }
  TypeOfUser(e) {
    let attr = e.currentTarget.attributes["data-value"].value;
    if (attr == "1") {
      document.getElementById("alnkRegstrDvse").classList.add("active");
      document.getElementById("alnkRegstrGust").classList.remove("active");
    } else {
      document.getElementById("alnkRegstrGust").classList.add("active");
      document.getElementById("alnkRegstrDvse").classList.remove("active");
    }
  }

  VerifyEmail(e) {
    let emailReg = /^([\w-\.\'\’]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let emailaddressval = this.refs.email.value;
    if (emailaddressval == "") {
      swal("Email address cannot be empty.");
      return;
    } else if (!this.ValidateByRegExp(emailaddressval, emailReg)) {
      this.refs.email.value = "";
      swal("Enter a valid email address.");
      return;
    } else {
      Global.repEmail = this.refs.email.value;
      sessionStorage.setItem("repEmail", Global.repEmail);
      browserHistory.push("/area");
    }
  }

  ValidateByRegExp(email, pattern) {
    return pattern.test(email);
  }

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <div className="col-md-12 bdrBtm">
              <div className="logo">
                <a href="#">
                  <img
                    src="/img/purdue_logo.png"
                    width="125"
                    title="Precision for Value"
                  />
                </a>
              </div>
              <div className="contactusicon">
                <a href="#">
                  <img src="/img/contactus.png" width="35" title="Contact Us" />
                  Contact Us
                </a>
              </div>
              <div className="clear" />
            </div>

            <div className="clear" />
          </header>
          <form name="loginForm">
            <section className="midcont">
              <div className="col-md-6 welcomBg" />
              <div className="col-md-6 rightBg">
                <div className="col-md-12 topSpc">
                  <div className="RegstrDvseFrm">
                    <a
                      href="javascript:void(0)"
                      id="alnkRegstrDvse"
                      onClick={this.TypeOfUser}
                      data-value="1"
                      className="RegstrDvse active disable"
                    />
                    <span className="RegstrbtmTxt">
                      Use for authorized devices<br />
                      for continued access
                    </span>
                  </div>
                  <div className="RegstrDvseFrm">
                    <a
                      href="javascript:void(0)"
                      id="alnkRegstrGust"
                      data-value="2"
                      onClick={this.TypeOfUser}
                      className="RegstrGust disable"
                    />
                    <span className="RegstrGustbtmTxt">
                      Use for public devices and
                      <br />
                      one-time access only
                    </span>
                  </div>
                </div>
                <div className="clear" />

                <div className="col-md-8 verifyMailBg" id="divEmail">
                  <div className="col-md-10 nomrgs noPadg">
                    <input
                      ref="email"
                      type="text"
                      name="email"
                      placeholder="Please submit e-mail to receive login token"
                      className="col-md-12 verifyMailTxt"
                    />
                  </div>
                  <div className="submitBtn col-md-2">
                    <input
                      type="button"
                      onClick={this.VerifyEmail}
                      value="Submit"
                    />
                  </div>
                </div>
              </div>
            </section>
          </form>
          <div className="footer">
            <div className="footermid">
              <div className="footertext">
                For Internal Use Only. Do Not Detail or Distribute to Any Third
                Parties.
              </div>
              <div className="footernum" />
              <div className="footerlogo">
                <img src="/img/logo-footer.png" width="100" />
              </div>
            </div>
          </div>
        </div>

        <div className="clear" />
      </div>
    );
  }
}
