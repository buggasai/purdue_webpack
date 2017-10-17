"use strict";
import React from "react";
import { Link, browserHistory } from "react-router";
import $ from "jquery";
import "select2/dist/js/select2.full";
import Layout from "../Layout";
import { Plans } from "../../data/staticData";
import Campaigns from "./campaigns";
import PlanGrid from "./planGrid";
import Global from "../../utility/global";
import { CampaignService } from "../../data/Service";
import { GeneratePdf } from "./createPdf";

// import fs from "fs";
// import pdf from "pdfcrowd/lib/pdfcrowd";
// import assert from "assert";

var options = [];
export default class SelectMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      lowResLogoLocation: "",
      productKey: "",
      messageKey: "",
      campaigns: [],
      plans: [],
      isOpen: false
    };

    this.campaignClick = this.campaignClick.bind(this);
    this.CreatePdf = this.CreatePdf.bind(this);
    this.planClick = this.planClick.bind(this);

    Global.TerritoryId = sessionStorage.getItem("MarketId");
    Global.MarketId = sessionStorage.getItem("TerritoryId");
    Global.repEmail = sessionStorage.getItem("repEmail");
    Global.PrescriberId = sessionStorage.getItem("PrescriberId");
  }

  planClick(e) {
    e.preventDefault();
    var row = e.currentTarget;
    if ($(row).hasClass("bgactive")) {
      $(row).removeClass("bgactive");
    } else {
      $(row).addClass("bgactive");
    }
    var length = $(".bgactive").length;
    if (length > 5) {
      swal("You can select a maximum of 5 plans.");
      $(row).removeClass("bgactive");
      return false;
    }

    var $target = $(e.currentTarget),
      $inp = $target.find("input"),
      val = $target.find("input").attr("data-value"),
      idx;

    if ((idx = options.indexOf(val)) > -1) {
      options.splice(idx, 1);
      setTimeout(function() {
        $inp.prop("checked", false);
      }, 0);
    } else {
      options.push(val);
      setTimeout(function() {
        $inp.prop("checked", true);
      }, 0);
    }

    $(e.target).blur();
    console.log(options);
  }

  campaignClick(e) {
    $(".loader").show();
    let messageKey = e.currentTarget.attributes["data-messagekey"].value;
    let productKey = sessionStorage.getItem("ProductKey");
    sessionStorage.setItem("messageKey", messageKey);
    $("#ullist li").removeClass("resp-tab-active");
    $(".rowData").removeClass("bgactive");
    e.currentTarget.parentElement.classList.add("resp-tab-active");

    let plans = CampaignService.GetPlans(
      Global.PrescriberId,
      productKey,
      messageKey
    );

    plans.then(
      plansData => {
        if (plansData.length > 0) {
          let header = plansData[0].MainMessage;
          $("#lblMessage").html(
            header.replace(/®/gi, '<sup style="font-size:12px">®</sup>')
          );

          sessionStorage.setItem("headerMessage", $("#lblMessage").html());
        }
        this.setState({
          plans: plansData,
          messageKey: messageKey
        });
        sessionStorage.setItem("messageKey", this.state.messageKey);
        $(".loader").hide();
        options = [];
      },
      err => {
        console.log(err);
      }
    );
  }
  componentWillMount() {
    this.GetProductData();
  }

  CreatePdf() {
    try {
      // var client = new pdf.Pdfcrowd(
      //   "srikanthkathoje",
      //   "38e1ba2653f95dc9886ce612ae76c2c8"
      // );
      // assert.throws(function() { client.convertHtml(""); });

      console.log(options);
      sessionStorage.setItem("selectPlanIds", options);
      const selectedPlans = Plans.filter((element, index) => {
        for (var id of options) {
          if (id == element.id) return true;
        }
        return false;
      });

      let htmlContent;
      if (this.state.productKey == "Butrans") {
        htmlContent = GeneratePdf.Butrans(selectedPlans);
        sessionStorage.setItem("htmlContent", htmlContent);
      } else if (this.state.productKey == "OxyContin") {
        htmlContent = GeneratePdf.OxyContin(selectedPlans);
        sessionStorage.setItem("htmlContent", htmlContent);
      } else if (this.state.productKey == "Hysingla ER") {
        htmlContent = GeneratePdf.Hysingla(selectedPlans);
        sessionStorage.setItem("htmlContent", htmlContent);
      } else if (this.state.productKey == "Symproic") {
        htmlContent = GeneratePdf.Symproic(selectedPlans);
        sessionStorage.setItem("htmlContent", htmlContent);
      }

      // var pdf = new jsPDF('p', 'pt', 'letter');
      // pdf.addHTML(htmlContent, function () {
      //     pdf.save('Test.pdf');
      // });
      // let htmlContent = GeneratePdf.Cambia(selectedPlans);
      //client.convertHtml("<h1>Hello World</h1>", this.out_stream("html.pdf"));
      // document.getElementById("pdfContent").innerHTML = GeneratePdf.Cambia(
      //   selectedPlans
      // );

      browserHistory.push("/printJsPdf");
    } catch (e) {
      console.log(e);
    }
  }
  out_stream(name) {
    return pdf.saveToFile(name);
  }
  componentDidMount() {
    var self = this;
    var node = this.refs.myRef; // or this.refs['myRef']
    $(node)
      .select2()
      .on("change", function() {
        // this ensures the change via select2 triggers
        // the state change for your component
        self.handleChange();
      });
  }

  GetProductData() {
    var result = CampaignService.GetProducts(
      Global.PrescriberId,
      Global.MarketId
    ).then(
      productData => {
        sessionStorage.setItem("ProductKey", productData[0].ProductKey);
        let campaign = CampaignService.GetCampaigns(
          productData[0].ProductKey,
          Global.PrescriberId
        );

        campaign.then(
          campaingnData => {
            let plans = CampaignService.GetPlans(
              Global.PrescriberId,
              productData[0].ProductKey,
              campaingnData[0].MessageKey
            );
            plans.then(
              plansData => {
                if (plansData.length > 0) {
                  let header = plansData[0].MainMessage;
                  $("#lblMessage").html(
                    header.replace(/®/gi, '<sup style="font-size:12px">®</sup>')
                  );

                  sessionStorage.setItem(
                    "headerMessage",
                    $("#lblMessage").html()
                  );
                }
                this.setState({
                  products: productData,
                  lowResLogoLocation: productData[0].LowResLogoLocation,
                  productKey: productData[0].ProductKey,
                  messageKey: campaingnData[0].MessageKey,
                  campaigns: campaingnData,
                  plans: plansData
                });
                $(".loader").hide();
                $(".midcont").show();
                options = [];
                $(".rowData").removeClass("bgactive");
              },
              err => {
                console.log(er);
              }
            );
          },
          err => {
            console.log(err);
          }
        );
      },
      function(err) {
        console.log(err);
      }
    );
  }

  handleChange() {
    $(".loader").show();
    let proKey = this.refs.myRef.value;
    sessionStorage.setItem("ProductKey", proKey);
    let product = this.state.products.find(x => x.ProductKey == proKey);
    let campaign = CampaignService.GetCampaigns(proKey, Global.PrescriberId);
    campaign.then(
      campaingnData => {
        let plans = CampaignService.GetPlans(
          Global.PrescriberId,
          proKey,
          campaingnData[0].MessageKey
        );
        plans.then(
          plansData => {
            if (plansData.length > 0) {
              let header = plansData[0].MainMessage;

              $("#lblMessage").html(
                header.replace(/®/gi, '<sup style="font-size:12px">®</sup>')
              );

              sessionStorage.setItem("headerMessage", $("#lblMessage").html());
            }
            this.setState({
              lowResLogoLocation: product.LowResLogoLocation,
              productKey: proKey,
              messageKey: campaingnData[0].MessageKey,
              campaigns: campaingnData,
              plans: plansData
            });
            $(".loader").hide();
            sessionStorage.setItem("messageKey", this.state.messageKey);
            options = [];
            $(".rowData").removeClass("bgactive");
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    const products = this.state.products.map((element, index) => {
      return (
        <option key={index} value={element.ProductKey}>
          {element.ProductName}
        </option>
      );
    });

    $(document).ready(function() {
      $("[id$=ddlBrand]")
        .select2({
          placeholder: "Select Product",
          width: "280px"
        })
        .on("select2:close", function(e) {});
      $("#li1 a")
        .removeClass("selectedFirst")
        .addClass("active selecteddoc");
      $("#li2 a")
        .removeClass("selectedFirst")
        .addClass("active selected1");

      // $(".rowData").click(function(e) {
      //   e.preventDefault();
      //   if ($(this).hasClass("bgactive")) {
      //     $(this).removeClass("bgactive");
      //   } else {
      //     $(this).addClass("bgactive");
      //   }
      //   var length = $(".bgactive").length;
      //   if (length > 5) {
      //     swal("You can select a maximum of 5 plans.");
      //     $(this).removeClass("bgactive");
      //     return false;
      //   }

      //   var $target = $(e.currentTarget),
      //     $inp = $target.find("input"),
      //     val = $target.find("input").attr("data-value"),
      //     idx;

      //   if ((idx = options.indexOf(val)) > -1) {
      //     options.splice(idx, 1);
      //     setTimeout(function() {
      //       $inp.prop("checked", false);
      //     }, 0);
      //   } else {
      //     options.push(val);
      //     setTimeout(function() {
      //       $inp.prop("checked", true);
      //     }, 0);
      //   }

      //   $(e.target).blur();
      //   console.log(options);
      // });
    });

    return (
      <div className="container-fluid">
        <div className="loader" />
        <div className="container">
          <a id="aDoctor" className="title" href="/doctor">
            {sessionStorage.getItem("PrescriberName")}
          </a>
          <span className="title"> > </span>
          <a id="aTerritory" className="title" href="/area">
            {sessionStorage.getItem("TerritoryName")}
          </a>
          <span className="title"> > </span>
          <a id="aArea" className="title" href="/area">
            {sessionStorage.getItem("MarketText")}
          </a>
          <div className="content-body contentBody">
            <div className="midcont" style={{ display: "none" }}>
              <div id="dvBody">
                <div id="parentVerticalTab" className="resp-vtabs">
                  <div id="dvBrand">
                    <select
                      ref="myRef"
                      onChange={this.handleChange}
                      id="ddlBrand"
                      className="select2-container product_dd"
                    >
                      {products}
                    </select>
                  </div>
                  <div
                    id="dvLbl"
                    style={{
                      display: "none"
                    }}
                  >
                    <div className="product_label">
                      <label
                        id="lblProductName"
                        className="product_label_text"
                      />
                    </div>
                  </div>
                  <div className="brandlogo">
                    <img
                      src={"/img/" + this.state.lowResLogoLocation}
                      id="imgBrandLogo1"
                      alt="Brand Logo"
                    />
                  </div>
                  <Campaigns
                    campaignStateProp={this.campaignClick}
                    campaigns={this.state.campaigns}
                  />
                </div>
                <div className="titlediv" id="msghdrdiv">
                  <h3 id="h3"> {this.state.messageKey} </h3>
                  <label
                    className="textcolor"
                    style={{
                      color: "#261c02",
                      lineHeight: "26px",
                      fontSize: "22px",
                      fontWeight: "100"
                    }}
                    id="lblMessage"
                  />
                  <div
                    id="msghdrdiv_Hysingla"
                    style={{
                      display: "none"
                    }}
                  >
                    <h3 id="h1" />
                    <label className="textcolorblue" id="lblStaticMsg">
                      Select one recent win to highlight in the sell sheet
                    </label>
                  </div>
                </div>
                <div id="dvGrid" className="resp-tabs-container hor_1">
                  <PlanGrid
                    planStateProp={this.planClick}
                    plans={this.state.plans}
                  />
                  <div
                    style={{
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        float: "left",
                        color: "#000",
                        backgroundColor: "rgba(255,255,255,0.5)",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        marginRight: "15px"
                      }}
                      id="dvHCPName"
                    >
                      <input
                        type="checkbox"
                        name="checkbox"
                        style={{
                          marginRight: "5px"
                        }}
                        id="checkbox_id"
                      />
                      <label htmlFor="checkbox_id">
                        Include HCP name in Sell Sheet ? "
                      </label>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        float: "left",
                        color: "#000",
                        backgroundColor: "rgba(255,255,255,0.5)",
                        padding: "5px",
                        borderRadius: "5px",
                        marginTop: "5px"
                      }}
                      id="dvChkRestricted"
                    >
                      <input
                        type="checkbox"
                        id="chkRestrictedPlans"
                        style={{
                          marginRight: "5px"
                        }}
                      />
                      <label htmlFor="checkbox_id">
                        Include Restricted Plans in Sell Sheet ?
                      </label>
                    </div>
                  </div>
                  <div
                    style={{
                      float: "right"
                    }}
                  >
                    <input
                      type="button"
                      value="Create Sell Sheet"
                      className="targetButton"
                      onClick={this.CreatePdf}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="builDates">
            <label id="lblReleaseDate" title="Release date">
              Release Date :
            </label>
            <label id="lblLatestDate" title="Release date">
              Latest Data :
            </label>
          </div>
          <div className="footer">
            <div className="footermid">
              <div className="footertext">
                For Internal Use Only.Do Not Detail or Distribute to Any Third
                Parties.
              </div>
              <div className="footernum">
                <label id="lblJobCode" />
              </div>
              <div className="footerlogo">
                <img src="/img/logo-footer.png" width="100" />
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div id="pdfContent" />
      </div>
    );
  }
}
