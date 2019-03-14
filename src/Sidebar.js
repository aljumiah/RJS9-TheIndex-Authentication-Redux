import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        <div className="fixed-bottom">
          {!this.props.user ? (
            <div>
              <Link to="/login" className="btn btn-info m-2 float-left">
                Login
              </Link>

              <Link to="/signup" className="btn btn-success m-2 float-left">
                Signup
              </Link>
            </div>
          ) : (
            <button
              onClick={this.props.logout}
              className="btn btn-danger m-2 float-left"
            >
              logout
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
