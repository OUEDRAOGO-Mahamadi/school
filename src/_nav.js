export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'COMPTES',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Utilisateurs',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Connectés',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Corps Professoral',
      url: '/profs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Liste Professeurs',
          url: '/profs/liste-profs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Ajouter Professeur',
          url: '/profs/ajouter-prof',
          icon: 'icon-puzzle',
        },
        
      ],
    },

    {
      name: 'Parents Eleves',
      url: '/parents/liste-parent',
      icon: 'icon-bell',
     
    },

    {
      name: 'Registre Eleves',
      url: '/eleves',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Ajouter Eleve',
          url: '/eleves/ajouter-eleve',
          icon: 'icon-cursor',
        },
        {
          name: 'Liste Eleves',
          url: '/eleves/liste-eleve',
          icon: 'icon-cursor',
        },
      
      ],
    },
  
    {
      name: 'Emploi Du temps',
      url: '/Emploi-temps',
      icon: 'icon-star',
      children: [
        {
          name: 'Ajouter EDT',
          url: '/Emploi-temps/ajouter-Emploi-temps',
          icon: 'icon-star',
         
        },
        {
          name: 'Liste EDT',
          url: '/Emploi-temps/liste-Emploi-temps',
          icon: 'icon-star',
        },
        
      ],
    },

    {
      title: true,
      name: 'Planifications',
      wrapper: {
        element: '',
        attributes: {},
      },
    },

    {
      name: 'Gestion Matiere',
      url: '/Matiere',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Ajouter Matiere',
          url: '/Matiere/ajouter-matiere',
          icon: 'icon-cursor',
        },
        {
          name: 'Liste Matières',
          url: '/Matiere/liste-matiere',
          icon: 'icon-cursor',
        },
      
      ],
    },

  {
      name: 'Registre Absences',
      url: '/notifications',
      icon: 'icon-bell',
     
    },
    {
      name: 'Devoirs',
      url: '/Ajouter Devoir/Liste Devoirs',
      icon: 'icon-bell',
     
    },
    {
      name: 'Examens',
      url: '/Ajouter Examen/Liste Examens',
      icon: 'icon-bell',
     
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
