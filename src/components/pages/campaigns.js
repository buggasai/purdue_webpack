"use strict";
import React from "react";
import { Link } from "react-router";
import Global from "../../utility/global";

export default class Campaigns extends React.Component {
  constructor(props) {
    super(props);
  }
  Bind() {
    // const productKey = this.props.productKey;
    const campaignClick = this.props.campaignStateProp;
    if (this.props.campaigns != "" && this.props.campaigns != "undefined") {
      let data = this.props.campaigns;
      if (data.length > 0) {
        return data.map(function(element, index, array) {
          return (
            <li
              key={index}
              className={
                index === 0 ? "resp-tab-active resp-tab-item" : "resp-tab-item"
              }
              role="tab"
            >
              <a
                title={element.Title}
                className={element.CssClass}
                data-messagekey={element.MessageKey}
                style={{ display: "inline-block", borderStyle: "None" }}
                onClick={campaignClick}
              >
                {element.MessageKey}
              </a>
            </li>
          );
        });
      }
    }
  }
  render() {
    return (
      <ul className="resp-tabs-list" id="ullist">
        {this.Bind()}
      </ul>
    );
  }
}
