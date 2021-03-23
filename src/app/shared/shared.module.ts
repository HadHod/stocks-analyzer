import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';

const MODULES = [
  CommonModule,
  FormsModule,
];

const COMPONENTS = [
  AdditionalResourcesComponent,
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
