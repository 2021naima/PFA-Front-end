/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilInbox,
  cilAddressBook,
  cilBook,
  cilCalendarCheck,
  cilChartLine,
  cilListRich,
  cilList,
  cilPlus,
  cilPeople,
  cilSearch,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name:<h1 class="fs-2 fst-italic text yellow-500 ">SM Station  </h1>,
    
   
  },
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'gestion de stock',
    to: '/stock',
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des produit',
        to: '/stock/listProducts',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Ajouter un produits',
        to: '/stock/addProduct',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  }, 
  {
    component: CNavGroup,
    name: 'fournisseurs',
    to: '/stock',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'liste des fournisseurs',
        to: '/stock/listFournisseurs',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ajouter un fournisseur',
        to: '/stock/addfournisseur',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    
    ],
  },
  {
    component: CNavGroup,
    name: 'Gestion des clients ',
    to: '/Client',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'liste des Client',
        to: '/listClients',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ajouter un Client',
        to: '/ajouterClient',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'gestion des employés',
    to: '/Rh',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'liste des employé',
        to: '/Rh/listEmp',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ajouter un Employé',
        to: '/Rh/addEmp',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Ventes et achats',
    to: '/comptabilité',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'saisir une livraison fournisseur',
        to: '/stock/Achat',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List des livraison',
        to: '/stock/ListAchats',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'saisir une Vente',
        to: '/stock/AjouterVente',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List ventes',
        to: '/stock/ListVentes',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Ajouter une commande',
        to: '/AddCmd',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'La liste des commandes',
        to: '/ListCmds',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Les chiffres d affaires',
    to: '/chiffres',
    icon: <CIcon icon={ cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'saisir le chiffre du jour',
        to: '/ListCmds',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'saisir le chiffre du mois',
        to: '/ListCmds',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    
    ],
  },

  {
    component: CNavGroup,
    name: 'Gestion des citernes',
    to: '/fournisseur',
    icon: <CIcon icon={ cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des Citernes',
        to: '/stock/listCiternes',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ajouter une Citerne',
        to: '/stock/addCitern',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    
    ],
  },

  {
    component: CNavGroup,
    name: 'Gestion des pompes',
    to: '/fournisseur',
    icon: <CIcon icon={ cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'liste des Pompes',
        to: '/stock/listPompes',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ajouter une Pompe',
        to: '/stock/addPompe',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    
    ],
  },

  {
    component: CNavGroup,
    name: 'Les utilisateurs',
    to: '/users',
    icon: <CIcon icon={ cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ajouter utilisateur',
        to: '/addUser',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Liste des utilisateurs',
        to: '/listUsers',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    
    ],
  }
  /*
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },*/
]

export default _nav
