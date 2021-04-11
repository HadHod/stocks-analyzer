import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { ComponentsListComponent } from './components-list/components-list.component';
import { GoldComponent } from './companies/usa/gold/gold.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { CgnxComponent } from './companies/usa/cgnx/cgnx.component';
import { AbbvComponent } from './companies/usa/abbv/abbv.component';

const USA = [
  GoldComponent,
  CgnxComponent,
  AbbvComponent,
];

@NgModule({
  declarations: [
    ComponentsListComponent,
    USA,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnalysisRoutingModule,
    ChartsModule,
  ]
})
export class AnalysisModule { }
