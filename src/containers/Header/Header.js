import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';

import { languages } from "../../utils";
import { changeLanguages } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  changeLanguages = (language) => {
    //fire redux event: actions
    this.props.changeLanguagesRedux(language);
  };

  render() {
    const { processLogout, language, userInfo } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="languages">
          <span className="welcome">
            <FormattedMessage id="home-header.welcome" />
            {userInfo && userInfo.firstName ? userInfo.firstName : ""} !
          </span>
          <div
            className={
              language === languages.VI ? "language-vi active" : "language-vi"
            }
          >
            <span onClick={() => this.changeLanguages(languages.VI)}>VN</span>
          </div>
          <div
            className={
              language === languages.EN ? "language-en active" : "language-en"
            }
          >
            <span onClick={() => this.changeLanguages(languages.EN)}>EN</span>
          </div>
          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log Out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguagesRedux: (language) =>
      dispatch(actions.changeLanguages(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
