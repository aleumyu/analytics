import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage';

import './App.css';

const user = {
  name: 'David',
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const logIn = () => {
    setCurrentUser({ currentUser: user });
    console.log('hola', currentUser);
  };

  const logOut = () => {
    setCurrentUser({ currentUser: null });
  };

  return (
    <div>
      <Header {...currentUser} logIn={logIn} logOut={logOut} />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
