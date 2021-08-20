import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';

import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { AgencyListComponent } from './agency-list/agency-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/agency',
    pathMatch: 'full'
  },
  {
    path: 'agency',
    component: AgencyListComponent,
    data: {
      title: 'Lista de Agencias'
    }
  },
  {
    path: 'agency/:id',
    component: AgencyDetailComponent,
    data: {
      title: 'Agency detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
