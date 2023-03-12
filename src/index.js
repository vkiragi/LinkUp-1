import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MyProfile from './components/Profile/MyProfile';
import UserProfile from './components/Profile/UserProfile';
import AboutMe from './components/Profile/AboutMe';
import Experience from './components/Profile/Experience';
import Schedule from './components/Profile/Schedule';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
          <Route exact path="/myprofile/aboutme" element={<AboutMe />} />
          <Route exact path="/myprofile/experience" element={<Experience />} />
          <Route exact path="/myprofile/schedule" element={<Schedule />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
