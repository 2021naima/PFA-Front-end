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
import { DocsExample } from 'src/components'

function UpdatePompe() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [pompe, setPompe] = useState({
    id:id,
    code: "",
    citerne:"",

  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/pompe/'+id,{ headers: authHeader() }).then((res) => {
        setPompe(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/pompe/update/'+id, pompe,{ headers: authHeader() })
         .then(res => {
         console.log( pompe);
         navigate("/stock/listPompes",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newpompe={...pompe}
     newpompe[e.target.id]=e.target.value
     setPompe(newpompe)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id de la pompe</th>
              <th className="">Code de la pompe</th>
              <th className="">Citerne reliée</th>
              
            </tr>
          </thead>
          <tbody>
         <tr key={pompe.id}>
        
              <td > {pompe.id}</td>
              <td > {pompe.code}</td>
              <td > {pompe.citerne}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations de la pompe</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">id de la pompe</CFormLabel>
              <CFormInput type="text"  id="id"  value={pompe.id}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Code de la pompe</CFormLabel>
              <CFormInput type="text" id="code" onChange={(e) =>handle(e)} value={pompe.code}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">citenre reliée </CFormLabel>
              <CFormInput type="text" id="citerne" placeholder="1234 Main St" onChange={(e) =>handle(e)} value={pompe.citerne}/>
            </CCol>
           
            <CCol md={6} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={6} className="text-center">
              <Link to={`/stock/listPompes`} className="btn btn-info">Retour à la liste des pompes</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdatePompe