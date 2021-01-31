import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h1 className="logo">Pelmorex Analytics</h1>
    </Link>
    <div className="options">
      {currentUser ? (
        <div className="option">Log Out</div>
      ) : (
        <Link className="option" to="/signin">
          Log In
        </Link>
      )}
    </div>
  </div>
);

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

// export default connect(mapStateToProps)(Header);

export default Header;
