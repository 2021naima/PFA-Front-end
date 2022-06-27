/* eslint-disable */
import React from 'react'
import  { useState, useEffect } from 'react'
import axios from "axios"

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
  useEffect(() => {
    axios.get("http://localhost:8080/api/station/chiffresMois").then((res) => {
        setChiffresMois(res.data) })
    axios.get("http://localhost:8080/api/station/employee/number").then((res) => {
      setNombreEmployees(res.data) })
      axios.get("http://localhost:8080/api/station/produit/produits").then((res) => {
      setProduits(res.data) })
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
      <CCol sm={6} lg={3}>
      <CWidgetStatsC
              icon={<CIcon icon={cilSpeedometer} height={36} />}
              value= {hour + ":"+minute+":"+second}
              title={day+5+" "+ month}
              progress={{ color: 'danger', value: 75 }}
            />
            </CCol>
       <CCol sm={6} lg={3}>
         <CWidgetStatsC
              icon={<CIcon icon={cilPeople} height={36} />}
              value={nombreEmployees}
              title="Employés"
              progress={{ color: 'info', value: 75 }}
            />
        
      </CCol>
      </CRow>
      <br/>
      <CRow>
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
                {/* <CIcon icon={cilArrowTop} /> */}
                
              </span>
            </>
          }
          title={produit.designation}
          //title={produit.quantiteRestante}
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
  <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              2.49{' '}
              <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Conversion Rate"
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
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              44K{' '}
              <span className="fs-6 fw-normal">
                (-23.6% <CIcon icon={cilArrowBottom} />)
              </span>
            </>
          }
          title="Sessions"
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
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                  'January',
                  'February',
                  'March',
                  'April',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
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
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
    </>
  )
}

export default WidgetsDropdown
