import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UniversiteDataComponent } from './universite-data/universite-data.component';
import { UniversiteAjoutComponent } from './universite-ajout/universite-ajout.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FoyerUpdateFormComponent } from './foyer-update-form/foyer-update-form.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AppDashboardComponent } from '../dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserInfoComponent } from './user-info/user-info.component';
import { ChambreInfoComponent } from './chambre-info/chambre-info.component';
import { ChambreFormComponent } from './chambre-form/chambre-form.component';
import { ChambreUpdateFormComponent } from './chambre-update-form/chambre-update-form.component';
import { BlocComponent } from './bloc/bloc.component';
import { BlocUpdateFormComponent } from './bloc-update-form/bloc-update-form.component';
import { BlocFormComponent } from './bloc-form/bloc-form.component';
import { FoyerAffecteBlocComponent } from './foyer-affect-bloc/foyer-affect-bloc.component';
import { AffecterFoyerAUniversiteComponent } from './affecter-foyer-auniversite/affecter-foyer-auniversite.component';
import { AffecterChambreABlocComponent } from './affecter-chambre-abloc/affecter-chambre-abloc.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    NgApexchartsModule
  ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
    UniversiteDataComponent,
    UniversiteAjoutComponent,
    UniversiteUpdateComponent,
    FoyerComponent,
    FoyerFormComponent,
    FoyerUpdateFormComponent,
    ChambreComponent,
    ReservationCardComponent,
    ReservationListComponent,
    AppDashboardComponent,
    UserInfoComponent,
    ChambreInfoComponent,
    ChambreFormComponent,
    ChambreUpdateFormComponent,
    BlocComponent,
    BlocUpdateFormComponent,
    BlocFormComponent,
    FoyerAffecteBlocComponent,
    AffecterFoyerAUniversiteComponent,
    AffecterChambreABlocComponent
  ],
})
export class UicomponentsModule { }
