import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = ({ currentUser, logIn, logOut }) => {
  console.log('hi', currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <h1 className="logo">Pelmorex Analytics</h1>
      </Link>
      <div className="options">
        {currentUser ? (
          <div className="option">
            <span className="welcome-msg">{`Welcome back, ${currentUser.name}!`}</span>
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <button className="option" onClick={logIn}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

// export default connect(mapStateToProps)(Header);

export default Header;
