import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntrinsicValueComponent } from './intrinsic-value/intrinsic-value.component';

const routes: Routes = [
  { path: 'intrinsic-value', component: IntrinsicValueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule { }
