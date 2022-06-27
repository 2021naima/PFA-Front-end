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

const Recapitulation= () => {
  const navigate = useNavigate()
  const [resultat, setResultat] = useState()

  const [date, setDate] = useState()
  const [heur, setHeur] = useState()
  const [codeCitern, setCodeCitern] = useState(0)
  const [typeCarburant, setTypeCarburant] = useState()
  const [quantiteAjout, setQuantiteAjout] = useState(0)
  const [fournisseur, setFournisseur] = useState()
  const [prixU, setPrixU] = useState(0)
  const [montantTotal, setMontantTotal] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
      date: date,
      heur: heur,
      typeCarburant:typeCarburant,
      quantiteAjout:quantiteAjout,
      fournisseur:fournisseur,
      prixU:prixU,
      montantTotal:montantTotal
    }
  
    axios.post('http://localhost:8080/api/station/recapitulation',{ headers: authHeader() }, data
 )
         .then(res => {
         console.log( data);
             })
   }



return(
  <>
  <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Saisir une livraison</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">Date</CFormLabel>
              <CFormInput type="text"  name="date" onChange={e => setDate(e.target.value)}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Heur</CFormLabel>
              <CFormInput type="text" name="heur" onChange={e => setHeur(e.target.value)} />
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Type de carburant </CFormLabel>
              <CFormInput type="text" name="typeCarburant" placeholder="" onChange={e => setTypeCarburant(e.target.value)}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">quantité Livrée en L</CFormLabel>
              <CFormInput name="quantity" placeholder="" onChange={e => setQuantiteAjout(e.target.value)}/>
            </CCol>
            <CCol md={8}>
              <CFormLabel htmlFor="inputCity">nom du Fournisseur</CFormLabel>
              <CFormInput name="fournisseur"  onChange={e => setFournisseur(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputZip">Prix unitair d'achat en DH</CFormLabel>
              <CFormInput name="prixU" onChange={e => setPrixU(e.target.value)} />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputZip">Montant Total en DH</CFormLabel>
              <CFormInput name="montantTotal" onChange={e => setMontantTotal(e.target.value)} />
            </CCol>
            <CCol md={3}  className="text-center">
              <CButton type="submit"  className="col-6"  onClick={e=>handleSubmit(e)}>Valider</CButton>
            </CCol>
            
            <CCol md={3}  className="text-center"> 
           
              <Link to={`/stock/ListAchats`} className="btn btn-primary " >Liste des Achats</Link>
              
            </CCol>
            <CCol md={3}  className="text-center" >
              <Link to={`/stock/listCiternes`} className="btn btn-primary">modifier le stock</Link>
            </CCol>
            <CCol md={3}  className="text-center">
              <Link to={`/stock/stock produits`} className="btn btn-primary" >modifier les citerne</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
  </>
)
}

export default Recapitulation