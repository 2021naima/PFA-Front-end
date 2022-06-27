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
} from '@coreui/react'

import { DocsExample } from 'src/components'

const AjouterChiffreMois= () => {
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
  
    axios.post('http://localhost:8080/api/station/citerne/addCiterne', data
 )
         .then(res => {
         console.log( data);
             })
   }



return(
  <>
  <h1 className="text-center">Ajouter une citerne</h1>
  
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Saisir une citerne</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="inputEmail4">le Code du citerne </CFormLabel>
              <CFormInput type="text"  name="code" onChange={e => setCode(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputPassword4">Capacity</CFormLabel>
              <CFormInput type="text" name="capacite" onChange={e => setCapacite(e.target.value)} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Carburant </CFormLabel>
              <CFormInput  type="text" name="produit"  onChange={e => setProduit(e.target.value)} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Stock restant </CFormLabel>
              <CFormInput type="text" name="stockRestant" placeholder="" onChange={e => setStockRestant(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CButton type="submit"   onClick={e=>handleSubmit(e)}>Valider</CButton>
            </CCol>
            <CCol md={6}>
              <Link to={`/stock/listCiternes`} className="btn btn-primary" >Liste des citernes</Link>
            </CCol>
          </CForm>
    
      </CCardBody>
    </CCard>
  </CCol>
  </>
)
}

export default AjouterChiffreMois
