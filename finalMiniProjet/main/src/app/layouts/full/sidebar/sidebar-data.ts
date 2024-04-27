import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/main/admin/ui-components/dashboard',
  },
 
  {
    navCap: 'Reservation',
  },
  {
    displayName: 'Reservation',
    iconName: 'pencil-plus',
    route: '/main/admin/ui-components/reservation',
  },

  
  
  {
    navCap: 'Université',
  },
 
  {
    displayName: 'Afficher Université',
    iconName: 'aperture',
    route: '/main/admin/ui-components/universite',
  },
  {
    displayName: 'Ajouter Université',
    iconName: 'mood-smile',
    route: '/main/admin/ui-components/adduniversite',
  },

  {
    navCap: 'Foyer',
  },
  {
    displayName: 'Afficher Foyer',
    iconName: 'aperture',
    route: '/main/admin/ui-components/foyer',
  },
  {
    displayName: 'ajouter un Foyer',
    iconName: 'tooltip',
    route: '/main/admin/ui-components/foyer-form',
  },

  {
    navCap: 'chambre',
  },

  {
    displayName: 'Afficher Chambre',
    iconName: 'aperture',
    route: '/main/admin/ui-components/chambre',
  },
  {
    displayName: 'Ajouter Chambre',
    iconName: 'aperture',
    route: '/main/admin/ui-components/chambre-form',
  },
  {
    navCap: 'bloc',
  },
  {
    displayName: 'Afficher bloc',
    iconName: 'aperture',
    route: '/main/admin/ui-components/bloc',
  },
  {
    displayName: 'ajouter bloc',
    iconName: 'aperture',
    route: '/main/admin/ui-components/bloc-form',
  },
];



//bloc-form-update