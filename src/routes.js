import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));

const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

//ecole
const AjouterEmp = React.lazy(() => import('./views/EmploiTemps/AjouterEmp'));
const ListEmp = React.lazy(() => import('./views/EmploiTemps/EmploiList'));

const AjouterEleve = React.lazy(() => import('./views/Eleve/AjouterEleve'));
const ListEleve = React.lazy(() => import('./views/Eleve/ListEleve'));

const AjouterParent = React.lazy(() => import('./views/Parents/AjouterParent'));
const Listparent = React.lazy(() => import('./views/Parents/ListParent'));

const AjouterProf = React.lazy(() => import('./views/Professeur/AjouterProf'));



const ListProf = React.lazy(() => import('./views/Professeur/ListProf'));

const AjouterMatiere = React.lazy(() => import('./views/Matiere/AjouterMatiere'));
const ListeMatiere = React.lazy(() => import('./views/Matiere/ListeMatiere'));

const AjouterDevoir = React.lazy(() => import('./views/Devoirs/AjouterDevoir'));
const ListeDevoirs = React.lazy(() => import('./views/Devoirs/ListeDevoirs'));

const AjouterExamen = React.lazy(() => import('./views/Examens/AjouterExamen'));
const ListeExamens = React.lazy(() => import('./views/Examens/ListeExamens'));
const AffecterMatiereClasse = React.lazy(() => import('./views/Matiere/AffecterMatiereClasse'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },


  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  //ecole

  { path: '/profs', exact: true,  name: 'Profs', component: ListProf },
  { path: '/profs/liste-profs', name: 'Profs', component: ListProf },
  { path: '/profs/ajouter-prof', name: 'Profs', component: AjouterProf },



  { path: '/parents', exact: true,  name: 'Parents', component: Listparent },
  { path: '/parents/liste-parent', name: 'liste Parents', component: Listparent },
  { path: '/parents/ajouter-parent', name: 'ajouter Parents', component: AjouterParent },

  { path: '/eleves', exact: true,  name: 'Eleve', component: ListEleve },
  { path: '/eleves/liste-eleve', name: 'liste Eleve', component: ListEleve },
  { path: '/eleves/ajouter-eleve', name: 'ajouter Eleve', component: AjouterEleve },

  { path: '/Emploi-temps', exact: true,  name: 'Emploi', component: ListEmp },
  { path: '/Emploi-temps/liste-Emploi-temps', name: 'Liste Emploi', component: ListEmp },
  { path: '/Emploi-temps/ajouter-Emploi-temps', name: 'Ajouter Emploi', component: AjouterEmp },

  { path: '/Matiere', exact: true,  name: 'Matiere', component: ListeMatiere },
  { path: '/Matiere/liste-matiere', name: 'Liste Matiere', component: ListeMatiere },
  { path: '/Matiere/ajouter-matiere', name: 'Ajouter Matiere', component: AjouterMatiere },

  { path: '/Ajouter Devoir', exact: true,  name: 'Ajouter Devoir', component: AjouterDevoir },
  { path: '/Ajouter Devoir/Liste Devoirs', name: 'Liste devoirs', component: ListeDevoirs  },

  { path: '/Ajouter Examen', exact: true,  name: 'Ajouter Examen', component: AjouterExamen },
  { path: '/Ajouter Examen/Liste Examens', name: 'Liste Examens', component: ListeExamens  },

  { path: '/Matiere/affecter-matiere', name: 'Affecter Matiere', component: AffecterMatiereClasse },
];

export default routes;
