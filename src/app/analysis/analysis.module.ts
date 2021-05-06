import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { ComponentsListComponent } from './components-list/components-list.component';
import { GoldComponent } from './companies/usa/gold/gold.component';
import { SharedModule } from '../shared/shared.module';
import { CgnxComponent } from './companies/usa/cgnx/cgnx.component';
import { AbbvComponent } from './companies/usa/abbv/abbv.component';
import { VzComponent } from './companies/usa/vz/vz.component';
import { SccoComponent } from './companies/usa/scco/scco.component';
import { AqnComponent } from './companies/usa/aqn/aqn.component';
import { TrpComponent } from './companies/usa/trp/trp.component';
import { KaluComponent } from './companies/usa/kalu/kalu.component';
import { KrComponent } from './companies/usa/kr/kr.component';

const USA = [
  GoldComponent,
  CgnxComponent,
  AbbvComponent,
  VzComponent,
  SccoComponent,
  AqnComponent,
  TrpComponent,
  KaluComponent,
  KrComponent,
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
  ]
})
export class AnalysisModule { }
