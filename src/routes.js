/* eslint-disable */
import React from 'react'
import AddEmployee from './gestionRh/AddEmployee'
import AddCiterne from './gestionStock/AddCiterne'
import AddFournisseur from './gestionStock/AddFournisseur'
import AddPompe from './gestionStock/AddPompe'
import AddProduct from './gestionStock/AddProduct'
import ListeCiternes from './gestionStock/ListeCiternes'
import ListePompes from './gestionStock/ListePompes'
import ListeFournisseurs from './gestionStock/ListFournisseurs'
import ListProducts from './gestionStock/ListProducts'
import ListEmployees from './gestionRh/ListEmployees'
import AjouterTodo from './gestionStock/AjouterTodo'
import ListTodo from './gestionStock/ListTodo'
import UpdateProduct from './gestionStock/UpdateProduct'

import TestElement from './tests/TestElement'
import Recapitulation from './comptability/LivraisonFournisseur'
import ListAchats from './comptability/ListAchats'
import UpdateAchat from './gestionStock/UpdateAchat'
import AjouterVente from './gestionStock/AjouterVente'
import ListVentes from './gestionStock/ListVentes'
import UpdateVente from './gestionStock/UpdateVente'
import UpdateCiterne from './gestionStock/UpdateCiterne'
import Profile from './components copy/Profile'
import UpdateFournisseur from './gestionStock/UpdateFournisseur'
import UpdatePompe from './gestionStock/UpdatePompe'
import UpdateEmploye from './gestionRh/UpdateEmploye'
import Form from './Form'
import Register from './components copy/Register'
import AjouterCommande from './gestionStock/AjouterCommande'
import ListeCmds from './gestionStock/ListeCmds'
import UpdateCmd from './gestionStock/UpdateCmd'
import AddClient from './gesstionClients/AjouterClient'
import ListClients from './gesstionClients/ListeClients'
import UpdateClient from './gesstionClients/ModifierClient'
import UpdateUser from './gestionUsers/ModifierUsers'
import ListUsers from './gestionUsers/ListeUsers'








const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/Rh', name: 'Ressources Humaine', element: Cards, exact: true },
  { path: '/Rh/listEmp', name: 'liste des Employés', element: ListEmployees },
  { path: '/Rh/addEmp', name: 'ajouter un Employé', element: AddEmployee },
  { path: '/Rh/updateEmp/:id', name: 'modifier un employé', element: UpdateEmploye },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/stock', name: 'stock', element: Cards, exact: true },
  { path: '/stock/listProducts', name: 'liste des Products', element: ListProducts },
  { path: '/stock/addProduct', name: 'ajouter un Product', element: AddProduct },
  { path: '/stock/listFournisseurs', name: 'liste des Fournisseurs', element: ListeFournisseurs },
  { path: '/stock/updateFournisseur/:id', name: 'modifier un Fournisseur', element: UpdateFournisseur },
  { path: '/stock/addfournisseur', name: 'ajouter un fournisseur', element: AddFournisseur },
  { path: '/stock/listPompes', name: 'liste des Pompes', element: ListePompes },
  { path: '/stock/addPompe', name: 'Ajouter pompe', element: AddPompe },
  { path: '/stock/updatePompe/:id', name: 'modifier pompe', element: UpdatePompe },
  { path: '/stock/listCiternes', name: 'liste des Citernes', element: ListeCiternes },
  { path: '/stock/addCitern', name: 'ajouter une Citern', element: AddCiterne },
  { path: '/stock/ConsulterCiterne/:id', name: 'Consulter Vente', element: UpdateCiterne },
  { path: '/stock/AddTodo', name: 'AddTodo', element: AjouterTodo },
  { path: '/stock/listTodo', name: 'listTodo', element: ListTodo },
  { path: '/stock/updateProduct/:id', name: 'modifier un produit', element: UpdateProduct },
  { path: '/stock/exemple', name: 'exemple', element: TestElement },
  { path: '/stock/Achat', name: 'saisir Livraison', element: Recapitulation },
  { path: '/stock/ListAchats', name: 'La liste des livraison', element: ListAchats },
  { path: '/stock/ConsulterAchat/:id', name: 'Consulter les Livraisons', element: UpdateAchat },
  { path: '/stock/AjouterVente', name: 'saisir une Vente', element: AjouterVente },
  { path: '/stock/ListVentes', name: 'la liste ventes', element: ListVentes },
  { path: '/stock/updteVente', name: 'modifier une vente', element: ListVentes },
  { path: '/stock/ConsulterVente/:id', name: 'Consulter Vente', element: UpdateVente },
  { path: '/profile', name: 'userProfile', element: Profile },


  { path: '/AddCmd', name: 'ajouter une commande', element: AjouterCommande },
  { path: '/ListCmds', name: 'List des commandes', element: ListeCmds },
  { path: '/updateCmd/:id', name: 'modifier la commande', element: UpdateCmd },

  { path: '/ajouterClient', name: 'Ajouter un client', element: AddClient },
  { path: '/listClients', name: 'La liste des clients', element: ListClients },
  { path: '/updateClient/:id', name: 'Modifier le client', element: UpdateClient },


  { path: '/addUser', name: 'ajouter un utilisateur', element: Register },
  { path: '/updateUser/:id', name: 'Modifier l utilisateur', element: UpdateUser },
  { path: '/listUsers', name: 'Modifier l utilisateur', element: ListUsers },


   

  








]

export default routes
