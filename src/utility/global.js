"use strict";
import React from "react";
import { browserHistory } from "react-router";
class Global extends React.Component {
  constructor() {
    super();
    this.TerritoryId = 0;
    this.PrescriberId = 0;
    this.ProductKey = "";
    this.repEmail = "";
    this.MarketId = 0;
    this.TerritoryName = "";
    this.AreaName = "";
    this.PrescriberName = "";
    this.MessageKey = "";
  }
}
export default new Global();
