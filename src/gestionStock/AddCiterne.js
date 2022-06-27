/* eslint-disable */
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
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
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import authHeader from '../services/auth-header.js';

const AjouterVente= () => {
  const navigate = useNavigate()
  const [resultat, setResultat] = useState()

  const [code, setCode] = useState()
  const [capacite, setCapacite] = useState()
  const [produit, setProduit] = useState(0)
  const [stockRestant, setStockRestant] = useState()

  const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
      code:code,
      capacite:capacite,
      produit:produit,
      stockRestant:stockRestant
    }
  
    axios.post('http://localhost:8080/api/station/citerne/addCiterne', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/stock/listCiternes",{ replace: true });
        }).catch(err=>console.error(err))
        
   }



return(
  <>
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>veillez Saisir les information de la citerne</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={3}>
              <CFormLabel htmlFor="inputEmail4">le Code de la citerne </CFormLabel>
              <CFormInput type="text"  name="code" onChange={e => setCode(e.target.value)}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputPassword4">Capacity en L</CFormLabel>
              <CFormInput type="text" name="capacite" onChange={e => setCapacite(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Carburant </CFormLabel>
              <CFormInput  type="text" name="produit"  onChange={e => setProduit(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Stock restant en L </CFormLabel>
              <CFormInput type="text" name="stockRestant" placeholder="" onChange={e => setStockRestant(e.target.value)}/>
            </CCol>
            
            <CCol md={4}>
            </CCol>
            <CCol md={2} className="text-center">
            
              <CButton type="submit"  className="col-12"   onClick={e=>handleSubmit(e)}>Valider la saisie</CButton>
              </CCol>
            
            
            <CCol md={2}>
              <Link to={`/stock/listCiternes`} className="btn btn-primary col-12" >Liste des citernes</Link>
            </CCol>
            
            <CCol md={4}>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
  </>
)
}

export default AjouterVente
