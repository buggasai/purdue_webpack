"use strict";
import React from "react";
import { Link, browserHistory } from "react-router";
import $ from "jquery";
import "select2/dist/js/select2.full";

import Global from "../../utility/global";
import { TerritoriesService } from "../../data/Service";

export default class Territory extends React.Component {
  constructor(props) {
    super(props);

    this.state = { territory: [], markets: [] };
    Global.repEmail = sessionStorage.getItem("repEmail");
  }

  componentWillMount() {}

  componentDidMount() {
    //this.GetTerrtoriesData();
    this.GetMarketData();

    var self = this;
    var node = this.refs.market; // or this.refs['myRef']
    $(node)
      .select2()
      .on("change", function() {
        // this ensures the change via select2 triggers
        // the state change for your component
        self.handleChange();
      });
  }

  handleChange() {
    let marketId = this.refs.market.value;
    this.GetTerrtoriesData(marketId);
  }

  GetMarketData() {
    var result = TerritoriesService.GetMarkets(Global.repEmail).then(
      data => {
        this.setState({ markets: data });
      },
      function(err) {
        console.log(err.status);
      }
    );
  }

  GetTerrtoriesData(marketId) {
    var result = TerritoriesService.GetTerritories(
      marketId,
      Global.repEmail
    ).then(
      data => {
        this.setState({ territory: data });
      },
      function(err) {
        console.log(err);
      }
    );
  }

  render() {
    const territory = this.state.territory.map((element, index) => {
      return (
        <option key={index} value={element.TerritoryID}>
          {element.TerritoryName}
        </option>
      );
    });

    const mkets = this.state.markets.map((element, index) => {
      return (
        <option key={index} value={element.MarketID}>
          {element.DisplayMarket}
        </option>
      );
    });

    $(document).ready(function() {
      $("[id$=ddlArea]")
        .select2({
          placeholder: "Select Therapeutic Area",
          width: "230px"
        })
        .on("select2:close", function(e) {
          if (
            e.target.value != null &&
            e.target.value != "" &&
            e.target.value != undefined
          ) {
            let selectedText = e.target.options[e.target.selectedIndex].text;
            sessionStorage.setItem("MarketId", e.target.value);
            sessionStorage.setItem("MarketText", selectedText);
            //Global.MarketId = e.target.value;
            //browserHistory.push(`/doctor`);
          }
        });
      $("[id$=ddlTerritory]")
        .select2({
          placeholder: "Select Territory",
          width: "230px"
        })
        .on("select2:close", function(e) {
          if (
            e.target.value != null &&
            e.target.value != "" &&
            e.target.value != undefined
          ) {
            let selectedText = e.target.options[e.target.selectedIndex].text;
            sessionStorage.setItem("TerritoryId", e.target.value);
            sessionStorage.setItem("TerritoryName", selectedText);
            //Global.TerritoryId = e.target.value;
            browserHistory.push(`/doctor`);
          }
        });
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
                  Please Select Therapeutic Area and Territory to Select
                  Messages for
                </p>
              </div>
              <div className="col-md-12" style={{ marginTop: "15px" }}>
                <div className="col-md-6">
                  <select
                    ref="market"
                    className="select2-container"
                    id="ddlArea"
                  >
                    <option value="" />
                    {mkets}
                  </select>
                </div>
                <div className="col-md-6" id="divex">
                  <select className="select2-container" id="ddlTerritory">
                    <option value="" />
                    {territory}
                  </select>
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
