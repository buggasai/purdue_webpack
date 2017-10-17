"use strict";
import React from "react";
import { Link, browserHistory } from "react-router";
import $ from "jquery";
import "select2/dist/js/select2.full";
import Layout from "../Layout";
import Global from "../../utility/global";
import { PrescriberService } from "../../data/Service";

export default class Doctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prescribers: [] };
    Global.MarketId = sessionStorage.getItem("MarketId");
    Global.TerritoryId = sessionStorage.getItem("TerritoryId");
    Global.repEmail = sessionStorage.getItem("repEmail");
  }
  componentDidMount() {
    this.GetPrescriberData();
  }

  GetPrescriberData() {
    var result = PrescriberService.GetPrescribers(
      Global.repEmail,
      Global.MarketId,
      Global.TerritoryId
    ).then(
      data => {
        this.setState({ prescribers: data });
      },
      function(err) {
        console.log(err);
      }
    );
  }
  // createDoctors() {
  //   let items = [];
  //   let docts = Doctors.filter(x => x.TerritoryId == Global.TerritoryId);
  //   docts.forEach(function(element, index) {
  //     items.push(
  //       <option key={index} value={element.DoctorId}>
  //         {element.DoctorName}
  //       </option>
  //     );
  //   }, this);
  //   return items;
  // }

  render() {
    const prescribers = this.state.prescribers.map((element, index) => {
      return (
        <option key={index} value={element.PrescriberID}>
          {element.FirstName + " " + element.LastName}
        </option>
      );
    });

    $(document).ready(function() {
      $("[id$=ddlDoctor]")
        .select2({
          placeholder: "Select HCP",
          width: "280px"
        })
        .on("select2:close", function(e) {
          if (
            e.target.value != null &&
            e.target.value != "" &&
            e.target.value != undefined
          ) {
            // Global.PrescriberId = e.target.value;
            let selectedText = e.target.options[e.target.selectedIndex].text;
            sessionStorage.setItem("PrescriberId", e.target.value);
            sessionStorage.setItem("PrescriberName", selectedText);
            browserHistory.push(`/message`);
          }
        });
      $("#li1 a")
        .removeClass("selectedFirst")
        .addClass("active selecteddoc");
    
    });

    return (
      <div>
        <div className="container">
          <section className="midcont">
            <div className="col-md-6 welcomBg">
              <div />
            </div>
            <div className="col-md-6 rightBg">
              <div className="col-md-12">
                <p className="text2">
                  Please Select HCP to Generate Messages for
                </p>
              </div>
              <div className="col-md-12 spaces" style={{ marginTop: "15px" }}>
                <div className="col-md-12 spaces" id="divex">
                  <div
                    className="col-md-12 spaces"
                    id="divex"
                    style={{ textAlign: "center" }}
                  >
                    <select className="select2-container" id="ddlDoctor">
                      <option value="">Select HCP</option>
                      {prescribers}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className="footer">
              <div className="footermid">
                <div className="footertext">
                  For Internal Use Only. Do Not Detail or Distribute to Any
                  Third Parties.
                </div>
                <div className="footernum">
                  <label id="lblJobCOde" />
                </div>
                <div className="footerlogo">
                  <img src="../img/logo-footer.png" width="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
