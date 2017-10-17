import React from "react";
import Global from "../../utility/global";

export default class PlanGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  GetPlansData() {
    var result = this.props.plans;
    const planClick = this.props.planStateProp;
    if (result.length > 0) {
      result = result[0].join_output;
      return result.map((element, index) => {
        return (
          <tr key={index} className="rowData"  onClick={planClick}>
            <td> {element.BenType}</td>
            <td>{element.PlanName}</td>
            <td>
              {element.Tier}
              <input
                type="checkbox"
                style={{ display: "none" }}
                data-value={element.id}
                data-type="Normal"
                className="chkplan"
              />
            </td>
          </tr>
        );
      });
    }
    return 0;
  }

  render() {
    const empty = () => {
      return (
        <tr>
          <td colSpan="3" style={{ textAlign: "center" }}>
            No records found
          </td>
        </tr>
      );
    };

    return (
      <div id="divGrdCampaign">
        <div className="datagrid">
          <table>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Plan Name</th>
                <th>Formulary Coverage</th>
              </tr>
            </thead>
            <tbody>
              {this.GetPlansData() == 0 ? empty() : this.GetPlansData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
