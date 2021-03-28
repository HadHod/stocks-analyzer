import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { ComponentsListComponent } from './components-list/components-list.component';
import { GoldComponent } from './companies/usa/gold/gold.component';
import { ChartsModule } from 'ng2-charts';

const USA = [
  GoldComponent,
];

@NgModule({
  declarations: [
    ComponentsListComponent,
    USA,
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    ChartsModule,
  ]
})
export class AnalysisModule { }
