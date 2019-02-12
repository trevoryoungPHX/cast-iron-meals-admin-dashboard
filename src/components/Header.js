import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="topLeftMenu">
          <Link to="/signout" className="btn btn-2" style={{ textDecoration: 'none' }} >Sign Out</Link><br></br>
          <Link to="/feature" className="btn btn-2" style={{ textDecoration: 'none' }} >Home</Link>
        </div>
      );
    } else {
      return (
        <div className="topLeftMenu">
          <Link className="btn btn-2" style={{ textDecoration: 'none' }} to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
