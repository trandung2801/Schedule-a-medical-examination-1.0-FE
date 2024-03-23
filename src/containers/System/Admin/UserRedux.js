import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Input } from "reactstrap";
import { languages } from "../../../utils";
import * as actions from "../../../store/actions";

import { getAllCodeServices } from "../../../services/userService";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }
  async componentDidMount() {
    this.props.fetchGenderStart();
    // try {
    //   let res = await getAllCodeServices("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //compare now(this) and last(prev)
    if(prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux
      })
    }
  }

  render() {
    console.log(this.state);
    let genders = this.state.genderArr;
    let language = this.props.language;
    return (
      <div className="user-redux-container">
        <div className="title">User Redux with Andrew Tran</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">
                <FormattedMessage id="menu.manage-user.add" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.email" />
                </label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.password" />
                </label>
                <input type="password" className="form-control"></input>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.firstName" />
                </label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.lastName" />
                </label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.phoneNumber" />
                </label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="menu.manage-user.address" />
                </label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.gender" />
                </label>
                <select className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === languages.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.position" />
                </label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>Choose...</option>
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.roleId" />
                </label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>Choose...</option>
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="menu.manage-user.image" />
                </label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-primary">
                  <FormattedMessage id="menu.manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
