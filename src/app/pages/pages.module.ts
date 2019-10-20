import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

//Chart Module
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { PAGES_ROUTES } from './pages.routes';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AcountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {}
