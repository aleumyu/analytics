import React from 'react';

import Pages from '../../components/pages/pages.component';
import Users from '../../components/users/users.component';

import './homepage.style.scss';

const HomePage = () => (
  <div className="homepage">
    <Pages className="pages" />
    <Users className="users" />
  </div>
);

export default HomePage;
