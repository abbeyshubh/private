import React, { Component } from "react";
import { getCategoriesAction } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cat from "./cat";
import Payment from "./payment";
class App extends Component {
  state = {
    id: "",
    checkId: [],
    allIds: []
  };

  componentDidMount = () => {
    this.props.getCategoriesAction().then(res => {
      let arr = [];
      let data = res.payload.detail;
      data.map(item => {
        arr.push(item._id);
      });
      this.setState({ allIds: arr });
    });
  };

  iconDropdown = id => {
    if (this.state.id !== id) {
      this.setState({ id });
    } else {
      console.log("stateIDDDDDDDD", this.state.id);
      this.setState({ id: [...this.state.id, id] });
    }
  };

  checkBoxIds = e => {
    console.log(this.state.allIds);
    const checked = e.target.checked;
    let collection = [];
    if (checked) {
      collection = this.state.allIds;
      this.setState({ checkId: collection });
    } else {
      this.setState({ checkId: [] });
    }
  };
  componentDidUpdate = state => {
    console.log("prevState", state, this.state.check);
  };
  handleCheckboxClick = e => {
    const { value, checked } = e.target;

    if (checked) {
      const collection = this.state.allIds;
      console.log("collllll", collection, value);
      this.setState(prevState => ({
        checkId: [...prevState.checkId, value],
        check: collection.length === prevState.checkId.length + 1
      }));
      console.log("length", this.state.checkId.length);
    } else {
      this.setState(prevState => ({
        checkId: prevState.checkId.filter(item => item !== value),
        check: false
      }));
    }
  };
  catTable = () => {
    return Object.values(this.props.categories).map(item => {
      return Object.values(item).map(items => {
        return Object.values(items).map(mapItems => {
          return (
            <div className="data row">
              <div
                className="col-2"
                style={{ height: "74px", textAlign: "center" }}
              >
                <input
                  type="checkbox"
                  name="checkOne"
                  value={mapItems._id}
                  checked={this.state.checkId.includes(mapItems._id)}
                  onChange={e => {
                    this.handleCheckboxClick(e);
                  }}
                />
              </div>
              <div className="col-2" style={{ height: "74px" }}>
                {mapItems.name}
              </div>
              <div className="col-2" style={{ height: "74px" }}>
                {mapItems.products}
              </div>
              <div className="col-2" style={{ height: "74px" }}>
                {mapItems.prodInSc}
              </div>
              <div className="col-2" style={{ height: "74px" }}>
                {mapItems.visible ? (
                  <div style={{ color: "#1ABC9C" }}>Visible</div>
                ) : (
                  <div style={{ color: "#F46565" }}>
                    <i>Not Visible</i>
                  </div>
                )}
              </div>
              <div className="col-2" style={{ height: "74px" }}>
                <i
                  className="fas fa-ellipsis-h"
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    this.iconDropdown(mapItems._id);
                  }}
                />
                {this.state.id === mapItems._id ? (
                  <div>
                    <ul className="ddBack">
                      <li>
                        <a href="viewProducts" className="aBack">
                          View Products
                        </a>
                      </li>
                      <li>
                        <a href="notVisible" className="aBack">
                          Not Visible
                        </a>
                      </li>
                      <li>
                        <a href="newSeed" className="aBack">
                          New Seed
                        </a>
                      </li>
                      <li>
                        <a href="edit" className="aBack">
                          Edit
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                <Payment />
              </div>
            </div>
          );
        });
      });
    });
  };

  render() {
    return (
      <div>
        <Cat />
        <div className="bgClass">
          <div className="dataClass row">
            <div className="col-2" style={{ textAlign: "center" }}>
              <input
                type="checkbox"
                name="checkAll"
                checked={
                  this.state.checkId.length === this.state.allIds.length
                    ? true
                    : false
                }
                onChange={e => {
                  this.checkBoxIds(e, "all");
                }}
              />
            </div>
            <div className="col-2" style={{ color: "#A3A6B4" }}>
              NAME
            </div>
            <div className="col-2" style={{ color: "#A3A6B4" }}>
              PRODUCTS
            </div>
            <div className="col-2" style={{ color: "#A3A6B4" }}>
              PROD IN SC.
            </div>
            <div className="col-2" style={{ color: "#A3A6B4" }}>
              VISIBLE
            </div>
            <div className="col-2" style={{ color: "#A3A6B4" }}>
              ACTIONS
            </div>
          </div>
          <div>{this.catTable()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    categories: state.catReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategoriesAction }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
