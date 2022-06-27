/* eslint-disable */
import { useNavigate, Link,  useParams } from "react-router-dom"
import axios from "axios"
import authHeader from '../services/auth-header.js';

import React, { useState, useEffect } from "react"
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
} from '@coreui/react'

function UpdateCiterne() {
  const navigate=useNavigate()
  const { id } = useParams();
  const [citerne, setCiterne] = useState({
    id:id,
    code: "",
    capacite:"",
    produit:"",
    stockRestant:"",
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/citerne/'+id,{ headers: authHeader() }).then((res) => {
        setCiterne(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/citerne/update/'+id,citerne,{ headers: authHeader() })
         .then(res => {
         console.log( citerne);
         navigate("/stock/listCiternes");
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newCitern={...citerne}
     newCitern[e.target.id]=e.target.value
     setCiterne(newCitern)
   }

  return  (
  <>
    <div>
    
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id de la citerne</th>
              <th className="">code de la citerne </th>
              <th className="">capacité de la citerne en L</th>
              <th className="">Type carburant</th>
              <th className="">Stock restant dans la citerne en L</th>
            </tr>
          </thead>
          <tbody>
         <tr key={citerne.id}>
        
              <td > {citerne.id}</td>
              <td > {citerne.code}</td>
              <td > {citerne.capacite}</td>
              <td > {citerne.produit}</td>
              <td >{citerne.stockRestant}</td>
            
            </tr>
          </tbody>
        </table>
      </div>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations de la citerne</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="inputEmail4">code de la citerne</CFormLabel>
              <CFormInput type="text"  id="code" onChange={(e) =>handle(e)} value={citerne.code}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputPassword4">capacité de la citerne en L</CFormLabel>
              <CFormInput type="text" id="capacite" onChange={(e) =>handle(e)} value={citerne.capacite}/>
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Nom du carburant</CFormLabel>
              <CFormInput  type="text" id="produit"  onChange={(e) =>handle(e)}  value={citerne.produit} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Stock restant en L</CFormLabel>
              <CFormInput type="text" id="stockRestant" placeholder="1234 Main St" onChange={(e) =>handle(e)} value={citerne.stockRestant}/>
            </CCol>
            <CCol md={12}>
              <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
            </CCol>
            <CCol md={3} className="text-center">
            </CCol>
            <CCol md={3} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={3} >
              <Link to={`/stock/listCiternes`} className="btn btn-primary">Retour à la liste des citernes</Link>
            </CCol>
            <CCol md={3} >
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateCiterne