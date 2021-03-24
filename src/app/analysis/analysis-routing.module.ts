import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsListComponent } from './components-list/components-list.component';

const countries: Routes = [
  { path: 'poland', component: ComponentsListComponent },
  { path: 'usa', component: ComponentsListComponent },
  { path: 'germany', component: ComponentsListComponent },
  { path: 'uk', component: ComponentsListComponent },
];

const poland: Routes = [
  { path: 'analysis/usa/gold', component: null },
];

const usa: Routes = [
  { path: 'analysis/usa/gold', component: null },
];

const germany: Routes = [
  { path: 'analysis/usa/gold', component: null },
];

const uk: Routes = [
  { path: 'analysis/usa/gold', component: null },
];

const routes: Routes = [
  ...countries,
  ...poland,
  ...usa,
  ...germany,
  ...uk,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
