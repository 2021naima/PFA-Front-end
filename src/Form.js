/* eslint-disable */
import React from "react"
import { CFooter } from '@coreui/react'
import './form.css'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CRow,
  } from '@coreui/react'

const Form =()=>{


    return(
<CCard className="mb-4" color="white">
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>

      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    <CCard className="mb-4" color="white">

        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start text-center">
          </div>
          <div className="divider d-flex align-items-center my-4">
            <h4 className="text-center fw-bold mx-3 mb-0">Sign in</h4>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example4">Username</label>
          
            <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid Username" />
          </div>
          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg col-12" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
        </form>
        </CCard>
      </div>
    </div>
    
  </div>
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google" />
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in" />
      </a>
   

    </div>
    
</section>
</CCard>
    )
}

export default Form