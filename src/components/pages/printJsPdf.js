import React from "react";
import $ from "jquery";

export default class PdfViewer extends React.Component {
  constructor(props) {
    super();
    this.downLoadClick = this.downLoadClick.bind(this);
    this.printPdf = this.printPdf.bind(this);
  }
  componentDidMount() {}

  printPdf(e) {
    var pdf = new jsPDF("p", "mm", [297, 210]);
    var options = {
      background: "#fff" //background is transparent if you don't set it, which turns it black for some reason.
    };
    var margins = {
      top: 10,
      bottom: 10,
      left: 10,
      height: 600
    };
    pdf.fromHTML(
      $("#pdfIframe")
        .contents()
        .find(".container")[0],
      0,
      0,
      options,
      function(dispose) {}
    );
    pdf.autoPrint();
    pdf.output("dataurlnewwindow");
  }

  downLoadClick(e) {
    var pdf = new jsPDF("p", "mm", [297, 210]);
    var options = {
      background: "#fff" //background is transparent if you don't set it, which turns it black for some reason.
    };
    var margins = {
      top: 10,
      bottom: 10,
      left: 10,
      height: 600
    };
    pdf.addHTML(
      $("#pdfIframe")
        .contents()
        .find(".container")[0],
      0,
      0,
      options,
      function(dispose) {
        pdf.save(sessionStorage.getItem("ProductKey") + ".pdf");
      }
    );
  }

  render() {
    const content = sessionStorage.getItem("htmlContent");
    const pdfUrl = "/Pdfs/" + sessionStorage.getItem("ProductKey") + ".html";
    $(document).ready(function() {
      setTimeout(function() {
        $("#pdfIframe")
          .contents()
          .find("body")
          .html(content);
      }, 100);

      $("#li1 a")
        .removeClass("selectedFirst")
        .addClass("active selecteddoc");
      $("#li2 a")
        .removeClass("selectedFirst")
        .addClass("active selected1");
      $("#li3 a")
        .removeClass("selectedFirst")
        .addClass("active selected1");
      // $("#download").click(function() {
      // //  $.get("banner.html", function(data) {
      //     doc.fromHTML(data, 15, 15, {
      //       width: 170,
      //       elementHandlers: specialElementHandlers
      //     });
      //     doc.save("sample-content.pdf");
      //   //});
      // });
    });
    function iframeRef(frameRef) {
      return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument;
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="container">
            <section>
              <div
                className="col-md-12"
                style={{
                  background: "url(./img/bg.jpg) no-repeat",
                  height: "565px",
                  marginTop: "-23px"
                }}
              >
                <div className="col-md-2 left printLine">
                  <a
                    href="javascript:void(0)"
                    onClick={this.printPdf}
                    className="print"
                  >
                    <img
                      src="/img/printIcon.png"
                      style={{
                        float: "left",
                        marginBottom: "5px",
                        marginLeft: "30px"
                      }}
                    />
                  </a>
                  <div id="download" className="download">
                    <a href="javascript:void(0)" onClick={this.downLoadClick}>
                      <img src="/img/download.png" />
                    </a>
                  </div>
                </div>

                <div className="col-md-10">
                  <div
                    style={{
                      width: "88%",
                      height: "488px",
                      marginTop: "40px",
                      border: "1px #ccc solid"
                    }}
                  >
                    <div id="loadPdf">
                      <iframe
                        id="pdfIframe"
                        style={{ width: "100%", height: "488px" }}
                        src={pdfUrl}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="footer">
              <div className="footermid">
                <div className="footertext">
                  htmlFor Internal Use Only. Do Not Detail or Distribute to Any
                  Third Parties.
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
        </div>
        <div className="clear" />
      </div>
    );
  }
}
