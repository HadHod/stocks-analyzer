import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { ComponentsListComponent } from './components-list/components-list.component';

@NgModule({
  declarations: [ComponentsListComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
  ]
})
export class AnalysisModule { }
