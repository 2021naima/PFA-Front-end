/* eslint-disable */
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components copy/Home'

import './scss/style.scss'
import "./App.css";


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
//const Login = React.lazy(() => import('./views/pages/login/Login'))
//const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
import Register from "./components copy/Register";
import Login from "./components copy/Login";
import Profile from './components copy/Profile'
import BoardUser from './components copy/BoardUser'
import BoardModerator from './components copy/BoardModerator'
import BoardAdmin from './components copy/BoardAdmin'
import Form from './Form';
import WelcomePage from './pages/WelcomePage';

class App extends Component {
  render() {


    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            {/* <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} /> */}
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route path="/" name="Aceuil" element={<WelcomePage/>} />
            <Route path="/home" element={<WelcomePage/>} />
            <Route path="/login" name="Login Page" element={<Login/>} />
            <Route path="/register" name="Register Page" element={<Register/>} />
           {/* <Route path="/profile" element={<Profile/>} /> */}
            <Route path="/user" element={<BoardUser/>} />
            <Route path="/mod" element={<BoardModerator/>} />
            <Route path="/admin" element={<BoardAdmin/>} /> 

          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
