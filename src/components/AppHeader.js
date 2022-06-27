/* eslint-disable */
import React from "react"
import  { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'

import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)




  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
             Tableau de bord
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
        {currentUser ? (
        
              <CHeaderNav>
             <CNavItem>
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
              </CNavItem>
           <CNavItem>
              <a href="/home" className="nav-link" onClick={logOut}>
                Déconnecter
              </a>
            </CNavItem>
         
            </CHeaderNav>
        ) : (
          <CHeaderNav>
            <CNavItem>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
           
            </CNavItem>
            <CNavItem>
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
          
            </CNavItem>
            </CHeaderNav>
        )}
     </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
