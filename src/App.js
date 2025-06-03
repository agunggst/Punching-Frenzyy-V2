import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Mode from './pages/Mode'
import Camera from './pages/Camera';
import About from './pages/About';
// import Leaderboard from './pages/Leaderboard'

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/mode',
    exact: true,
    children: <Mode />
  },
  {
    path: '/about',
    exact: true,
    children: <About />
  },
  // {
  //   path: '/leaderboard',
  //   exact: true,
  //   children: <Leaderboard />
  // },
  {
    path: '/game',
    exact: true,
    children: <Camera />
  },
  {
    path: '/game/:difficulty',
    children: <Camera />
  },
];

function App() {
  const isMobile = navigator.userAgentData.mobile

  if (isMobile) return (
    <>
    <div className="is-mobile-container">
      <div className='is-mobile-message'>Please Open in Desktop Browser</div>
      <div className='is-mobile-message'>Thank you.</div>
    </div>
    </>
  )

  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, idx) => {
            return (
              <Route key={idx} {...route} />
            )
          })}
        </Switch>
      </Router>
    </>    
  );
}

export default App;
