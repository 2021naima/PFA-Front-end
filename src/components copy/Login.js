/* eslint-disable */
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { Routes, Route } from "react-router-dom";


import Register from "./Register";


import { Link } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import AuthService from "../services/auth.service";
import Login_nav from "./Login_nav";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
       Ce champ est obligatoir!
      </div>
    );
  }
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
    
     <CCard className="mb-4" color="white">
 <section className="leading-normal tracking-normal text-dark gradient">
 <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>

      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
       <CCard className="mb-4" color="white">
       <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleLogin} ref={form}>
        <div className="divider d-flex align-items-center my-4">
            <h4 className="text-center fw-bold mx-3 mb-0">Connexion</h4>
          </div>
          <div className="">
          <div className="form-group">
            <label className="form-label"  htmlFor="Nom d'utilisateur">Nom d'utilisateur</label>
            <Input
              type="text"
              className="form-control  form-control-lg"
              name="username"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>
          </div>
          <div className="form-group">
            <label  className="form-label" htmlFor="password">Mot de passe</label>
            <Input
              type="password"
              className="form-control form-control-lg"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
           <br/>
          <div className="form-group">
            <button className="btn btn-primary col-12" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Se connecter</span>
            </button>
          </div>
          <br/>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </CCard>


        </div>
    </div>
    </div>
    
        </section>
</CCard>

<div className="container mt-3">
        <Routes>
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
</>


  );
};

export default Login;
