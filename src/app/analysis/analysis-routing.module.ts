import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsListComponent } from './components-list/components-list.component';
import { GoldComponent } from './companies/usa/gold/gold.component';

const countries: Routes = [
  { path: 'poland', component: ComponentsListComponent },
  { path: 'usa', component: ComponentsListComponent },
  { path: 'germany', component: ComponentsListComponent },
  { path: 'uk', component: ComponentsListComponent },
];

const poland: Routes = [
  { path: 'poland/a', component: null },
];

const usa: Routes = [
  { path: 'usa/gold', component: GoldComponent },
];

const germany: Routes = [
  { path: 'germany/a', component: null },
];

const uk: Routes = [
  { path: 'uk/a', component: null },
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
