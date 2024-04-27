import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { UniversiteDataComponent } from './universite-data/universite-data.component';
import { UniversiteAjoutComponent } from './universite-ajout/universite-ajout.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FoyerUpdateFormComponent } from './foyer-update-form/foyer-update-form.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AppDashboardComponent } from '../dashboard/dashboard.component';
import { ChambreFormComponent } from './chambre-form/chambre-form.component';
import { ChambreUpdateFormComponent } from './chambre-update-form/chambre-update-form.component';
import { BlocComponent } from './bloc/bloc.component';
import { BlocUpdateFormComponent } from './bloc-update-form/bloc-update-form.component';
import { BlocFormComponent } from './bloc-form/bloc-form.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AppDashboardComponent
      },
      {
        path: 'universite',
        component: UniversiteDataComponent,
      },
      {
        path: 'adduniversite',
        component: UniversiteAjoutComponent,
      },
      {
        path: 'update/:idUniversite',
        component: UniversiteUpdateComponent,
      },
      {
        path: 'foyer',
        component: FoyerComponent,
      },
      {
        path: 'foyer-form',
        component: FoyerFormComponent,
      },
      {
        path: 'foyer-update-form/:id',
        component: FoyerUpdateFormComponent,
      },
      {
        path: 'chambre',
        component: ChambreComponent,
      },
      {
        path: 'chambre-form',
        component: ChambreFormComponent,
      },
      {
        path: 'chambre-update-form/:id',
        component: ChambreUpdateFormComponent,
      },
      {
        path: 'reservation',
        component: ReservationListComponent,
      },
      {
        path: 'bloc',
        component: BlocComponent,
      },
      {
        path: 'bloc-form-update/:id',
        component: BlocUpdateFormComponent,
      },
      {
        path: 'bloc-form',
        component: BlocFormComponent,
      },

      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
    ],
    
  },
];
