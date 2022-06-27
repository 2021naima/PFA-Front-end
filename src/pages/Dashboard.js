/* eslint-disable */
import React, { useState, useEffect } from "react"
import axios from "axios"
import authHeader from '../services/auth-header.js';

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { DocsCallout } from 'src/components'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'


import WidgetsDropdown from '../views/widgets/WidgetsDropdownCopie'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const [chiffresMois,setChiffresMois]=useState([]);
  const [nombreEmployees,setNombreEmployees]=useState(0)
  const [Citernes,setCiternes]=useState([])
  const [chiffreJour,setChiffreJour]=useState([])
  const [achats,setAchats]=useState([])
  const [ventes,setVentes]=useState([])
  const [cmd,setCmd]=useState([])

 
  useEffect(() => {
    axios.get("http://localhost:8080/api/station/chiffresMois",{ headers: authHeader() }).then((res) => {
        setChiffresMois(res.data) })
    axios.get("http://localhost:8080/api/station/employee/number",{ headers: authHeader() }).then((res) => {
      setNombreEmployees(res.data) })
    axios.get('http://localhost:8080/api/station/citerne/citernes',{ headers: authHeader() }).then((res) => {
        setCiternes(res.data) })
    axios.get('http://localhost:8080/api/station/AllchiffresJour',{ headers: authHeader() }).then((res) => {
          setChiffreJour(res.data) })
    axios.get('http://localhost:8080/api/station/Achats',{ headers: authHeader() }).then((res) => {
          setAchats(res.data) })
    axios.get('http://localhost:8080/api/station/Ventes',{ headers: authHeader() }).then((res) => {
        setVentes(res.data) })
        axios.get('http://localhost:8080/api/station/commande/commands',{ headers: authHeader() }).then((res) => {
          setCmd(res.data) })
  
  }, []);

  let date=new Date()
  let day=date.getDay()+5
  let month=date.getMonth()+1
  let year=date.getFullYear()
  let hour=date.getHours()
  let minute=date.getMinutes()
  let secod=date.getSeconds()

  return (
    <>
      <WidgetsDropdown />
      <CRow>
      <CCol xs={6} >
      <CCard className="mb-4" color="white">
        <CCardBody>
            <CCardHeader> Chiffres d'affaires par jour</CCardHeader> 
            
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: chiffreJour.map(chiffre=>chiffre.jour+'/'+chiffre.mois+'/'+chiffre.annee),
              datasets: [
                {
                  label: 'Chiffre du jour',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: chiffreJour.map(chiffre=>chiffre.chiffreDuJour),
                  fill: true,
                },
                {
                  label: 'Totale des achats',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data:chiffreJour.map(chiffre=>chiffre.totalAchats),
                
                },
                {
                  label: 'Total des ventes',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: chiffreJour.map(chiffre=>chiffre.totalVentes),
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
      </CCard>
       </CCol>

      <CCol xs={6}>
        <CCard className="mb-4" color="white">
          <CCardHeader>progrès des Chiffres d'affaires</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: chiffresMois.map(chiffre=>chiffre.mois),
                datasets: [
                  {
                    label: 'chiffre Affaire',
                    backgroundColor: '#f87979',
                    data: chiffresMois.map(chiffre=>chiffre.chiffreDuMois),
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>

      <br/>
      <CRow>
        <CCol xs>
          <CCard className="mb-4" color="white">
            <CCardHeader>Stock {' & '} Ventes {' & '}Cmmandes non livrées{' & '} Livraisons  </CCardHeader>
          <CCardBody>

            <CTable align="middle" className="mb-0 border" hover responsive color="warning">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Code de la citerne</CTableHeaderCell>
                    <CTableHeaderCell>capacité</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">carburant</CTableHeaderCell>
                    <CTableHeaderCell>Stock restant</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {Citernes.map(citerne=> (
                    <CTableRow v-for="item in tableItems" key={citerne.id}>
                      <CTableDataCell className="text-center">
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{citerne.id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      {citerne.code}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{citerne.capacite} </strong>
                          </div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl"  />
                        {citerne.produit}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">dérnière mise à jour</div>
                        <strong>{citerne.stockRestant}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              </CCardBody>
              </CCard >


              <CCard className="mb-4" color="white">
              <CCardBody>
             <h5>Les Commandes non livrée</h5>
              <CTable align="middle" className="mb-0 border" hover responsive color="success">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nom fournisseur</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nom produit</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Quantité commandée</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Prix unitair</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Montant total</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {cmd.map(cmd=> (
                    <CTableRow v-for="item in tableItems" key={cmd.id}>
                      <CTableDataCell className="text-center">

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{cmd.dateComande}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{cmd.nomFournisseur}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      {cmd.nomProduit}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                            <strong>{cmd.quantite} </strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl"  />
                        {cmd.prixU}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{cmd.montantTotal}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              </CCardBody>
              </CCard >

              <CCard className="mb-4" color="white">
              <CCardBody>
             <h5>Les Livraison</h5>
              <CTable align="middle" className="mb-0 border" hover responsive color="success">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">heur</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Carburant</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nom du fournisseur</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">La quantité livrée</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Le prix unitaire</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Le montant total</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {achats.map(achat=> (
                    <CTableRow v-for="item in tableItems" key={achat.id}>
                      <CTableDataCell className="text-center">

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{achat.date}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{achat.heur}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      {achat.nomProduit}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                            <strong>{achat.fournisseur} </strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl"  />
                        {achat.quantity}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{achat.prixU}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{achat.montant}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              </CCardBody>
              </CCard >
              <CCard className="mb-4" color="white">
              <CCardBody>
             <h5>Les ventes</h5>
              <CTable align="middle" className="mb-0 border" hover responsive color="info">
                <CTableHead color="white">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center ">date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">heur</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Code du volucompteur</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Carburant</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Client</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">La quantité vendu</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Le prix unitaire</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Le montant total</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {ventes.map(vente=> (
                    <CTableRow v-for="item in tableItems" key={vente.id}>
                      <CTableDataCell className="text-center">

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{vente.date}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{vente.heur}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{vente.codeVolucompteur}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      {vente.nomProduit}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                            <strong>{vente.client} </strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl"  />
                        {vente.quantiteVendu}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{vente.prixU}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{vente.montant}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              </CCardBody>
          </CCard>
        </CCol>
       </CRow>
       

      

     
    </>
  )
}

export default Dashboard
