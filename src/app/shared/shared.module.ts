import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';
import { BasicIndicatorsComponent } from './components/basic-indicators/basic-indicators.component';
import { DividendsComponent } from './components/dividends/dividends.component';
import { ChartsModule } from 'ng2-charts';
import { FinancialHistoryComponent } from './components/financial-history/financial-history.component';

const MODULES = [
  CommonModule,
  FormsModule,
  ChartsModule,
];

const COMPONENTS = [
  AdditionalResourcesComponent,
  BasicIndicatorsComponent,
  DividendsComponent,
  FinancialHistoryComponent,
];

const DIRECTIVES = [];

const PIPES = [];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  providers: [],
  exports: [MODULES, COMPONENTS, DIRECTIVES, PIPES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
