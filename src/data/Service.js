"use strict";
import React from "react";

let url = "https://purdueapi.herokuapp.com/";

var TerritoriesService = {
  GetTerritories: (marketId, repEmail) => {
    let totalUrl = url + "GetTerritories/" + repEmail + "/" + marketId;
    return $.getJSON(totalUrl);
  },
  GetMarkets: repEmail => {
    let totalUrl = url + "GetMarket/" + repEmail;
    return $.getJSON(totalUrl);
  }
};

var PrescriberService = {
  GetPrescribers: (repEmail, marketId, territoryId) => {
    let totalUrl =
      url + "GetPrescribers/" + repEmail + "/" + marketId + "/" + territoryId;
    return $.getJSON(totalUrl);
  }
};

var CampaignService = {
  GetProducts: (prescriberId, marketId) => {
    let totalUrl = url + "GetProducts/" + prescriberId + "/" + marketId;
    return $.getJSON(totalUrl);
  },
  GetCampaigns: (productKey, prescriberId) => {
    let totalUrl = url + "GetMessageTypes/" + prescriberId + "/" + productKey;
    return $.getJSON(totalUrl);
  },
  GetPlans: (prescriberId, productKey, messageKey) => {
    let totalUrl =
      url +
      "GetMessagePalns/" +
      prescriberId +
      "/" +
      productKey +
      "/" +
      messageKey;
    return $.getJSON(totalUrl);
  }
};

module.exports = {
  TerritoriesService,
  PrescriberService,
  CampaignService
};
