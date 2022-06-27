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

function UpdateUser() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState({
    id:id,
    cin: "",
    username:"",
    tel:"",
    email:"",
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/user/'+id,{ headers: authHeader() }).then((res) => {
      setUser(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/user/update/'+id, user,{ headers: authHeader() })
         .then(res => {
         console.log( user);
         navigate("/listUsers",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newUser={...user}
     newUser[e.target.id]=e.target.value
     setUser(newUser)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">CIN</th>
              <th className="">Nom d'utilisateur </th>
              <th className="">numéro de téléphone</th>
              <th className="">Adresse email</th>
              <th className="">mot de passe</th>
              
            </tr>
          </thead>
          <tbody>
         <tr key={user.id}>
        
              <td > {user.cin}</td>
              <td > {user.username}</td>
              <td >{user.tel}</td>
              <td >{user.email}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations de l'utilisateur</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">CIN</CFormLabel>
              <CFormInput type="text" id="cin" onChange={(e) =>handle(e)} value={user.cin}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Nom d' utilisateur</CFormLabel>
              <CFormInput type="text" id="username" placeholder="username" onChange={(e) =>handle(e)} value={user.username}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Numéro de téléphone </CFormLabel>
              <CFormInput type="text" id="tel" placeholder="téléphone" onChange={(e) =>handle(e)} value={user.tel}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Adresse</CFormLabel>
              <CFormInput id="adresse" placeholder="adresse" onChange={(e) =>handle(e)} value={user.adresse}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Adresse email</CFormLabel>
              <CFormInput id="email" placeholder="email"  onChange={(e) =>handle(e)} value={user.email}/>
            </CCol>
            <CCol md={6} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={6} className="text-center">
              <Link to={`/listUsers`} className="btn btn-info">Retour à la liste des Utilisateurs</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateUser