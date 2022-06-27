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

import authHeader from '../services/auth-header.js';

const AjouterVente= () => {
  const navigate = useNavigate()
  const [date, setDate] = useState()
  const [heur, setHeur] = useState()
  const [codeVolucompteur, setCodeVolucompteur] = useState(0)
  const [nomProduit, setNomProduit] = useState()
  const [quantiteVendu, setQuantiteVendu] = useState(0)
  const [client, setClient] = useState()
  const [prixU, setPrixU] = useState(0)
  const [montantTotal, setMontantTotal] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
      date: date,
      heur: heur,
      nomProduit:nomProduit,
      quantiteVendu:quantiteVendu,
      client:client,
      prixU:prixU,
      montantTotal:montantTotal
    }
  
    axios.post('http://localhost:8080/api/station/addVente', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/stock/ListVentes",{ replace: true });
        }).catch(err=>console.error(err))
        
   }



return(
  <>
  
    <CCol xs={12}>
    <CCard className="mb-4"color="white">
      <CCardHeader>
        <strong>Veuillez Saisir les information de le vente</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={3}>
              <CFormLabel htmlFor="inputEmail4">Date</CFormLabel>
              <CFormInput type="text"  name="date" onChange={e => setDate(e.target.value)}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputPassword4">Heur</CFormLabel>
              <CFormInput type="text" name="heur" onChange={e => setHeur(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Type de carburant </CFormLabel>
              <CFormInput type="text" name="nomProduit" placeholder="" onChange={e => setNomProduit(e.target.value)}/>
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress2">quantité vendu en L</CFormLabel>
              <CFormInput name="quantity" placeholder="" onChange={e => setQuantiteVendu(e.target.value)}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">nom du client</CFormLabel>
              <CFormInput name="client"  onChange={e => setClient(e.target.value)}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Prix unitair de vente en DH</CFormLabel>
              <CFormInput name="prixU" onChange={e => setPrixU(e.target.value)} />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Montant Total en DH</CFormLabel>
              <CFormInput name="montantTotal" onChange={e => setMontantTotal(e.target.value)} />
            </CCol>
            <CCol md={3} className="text-center">
              <CButton type="submit"  className="btn btn-primary col-7" onClick={e=>handleSubmit(e)}>Valider </CButton>
            </CCol>
            <CCol md={3}  className="text-center" >
              <Link to={`/stock/stock produits`} className="btn btn-primary">modifier le stock</Link>
            </CCol>
            <CCol md={3}  className="text-center">
              <Link to={`/stock/listCiternes`} className="btn btn-primary" >modifier les citerne</Link>
            </CCol>
            <CCol md={3} className="text-center">
              <Link to={`/stock/ListVentes`} className="btn btn-primary col-7" >Retour </Link>
            </CCol>
          </CForm>
       
      </CCardBody>
    </CCard>
  </CCol>
  </>
)
}

export default AjouterVente