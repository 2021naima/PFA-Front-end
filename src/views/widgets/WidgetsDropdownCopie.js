/* eslint-disable */
import React from 'react'
import  { useState, useEffect } from 'react'
import axios from "axios"
import authHeader from 'src/services/auth-header.js';

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CWidgetStatsC } from '@coreui/react'

import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions,cilSpeedometer ,cilPeople} from '@coreui/icons'

const WidgetsDropdown = () => {
  const [chiffresMois,setChiffresMois]=useState([]);
  const [nombreEmployees,setNombreEmployees]=useState(0)
  const [produits,setProduits]=useState([])
  const [nbrFournisseurs,setNbrFournisseurs]=useState(0)
  const [nbrClients,setNbrClients]=useState()
  useEffect(() => {
    axios.get("http://localhost:8080/api/station/chiffresMois",{ headers: authHeader() }).then((res) => {
        setChiffresMois(res.data) })
    axios.get("http://localhost:8080/api/station/employee/number",{ headers: authHeader() }).then((res) => {
      setNombreEmployees(res.data) })
      axios.get("http://localhost:8080/api/station/produit/produits",{ headers: authHeader() }).then((res) => {
      setProduits(res.data) })
    axios.get('http://localhost:8080/api/station/fournisseur/count',{ headers: authHeader() }).then((res) => {
      setNbrFournisseurs(res.data) })
      axios.get('http://localhost:8080/api/station/client/count',{ headers: authHeader() }).then((res) => {
      setNbrClients(res.data) })
  }, []);


  let date=new Date()
  let day=date.getDay()
  let month=date.toLocaleString('en-us', { month: 'long' })
  let year=date.getFullYear()
  let hour=date.getHours()
  let minute=date.getMinutes()
  let second=date.getSeconds()
  return (
    <>
    <CRow>
      <CCol sm={6} lg={3} >
      <CWidgetStatsC
              icon={<CIcon icon={cilSpeedometer} height={36} />}
              value= {hour + ":"+minute+":"+second}
              title={day+5+" "+ month}
              progress={{ color: 'danger', value: 75 }}
              color="white"
            />
            </CCol>
       <CCol sm={6} lg={3}>
         <CWidgetStatsC
              icon={<CIcon icon={cilPeople} height={36} />}
              value={nombreEmployees}
              title="Employés"
              progress={{ color: 'info', value: 75 }}
              color="white"
            />
        
      </CCol>
      <CCol sm={6} lg={3}>
         <CWidgetStatsC
              icon={<CIcon icon={cilPeople} height={36} />}
              value={nbrFournisseurs}
              title="Fournisseurs"
              progress={{ color: 'warning', value: 75 }}
              color="white"
            />
        
      </CCol>
      <CCol sm={6} lg={3}>
         <CWidgetStatsC
              icon={<CIcon icon={cilPeople} height={36} />}
              value={nbrClients}
              title="Clients"
              progress={{ color: 'primary', value: 75 }}
              color="white"
            />
      </CCol>
      { produits && produits.map(produit=>
   

      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {produit.prixU}{''}
              <span className="fs-6 fw-normal">Dh</span>
              <br/>
              <span className="fs-6 fw-normal">
                stock restant: {produit.quantiteRestante}
               
              </span>
            </>
          }
          title={produit.designation}
        
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
     />
      </CCol>
  )}
  </CRow>
  
    </>
  )
}

export default WidgetsDropdown
