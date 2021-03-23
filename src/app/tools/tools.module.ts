import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { IntrinsicValueComponent } from './intrinsic-value/intrinsic-value.component';

@NgModule({
  declarations: [
    IntrinsicValueComponent,
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
  ]
})
export class ToolsModule { }
