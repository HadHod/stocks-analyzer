import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { ChartsModule, ThemeService } from 'ng2-charts';

@NgModule({
  providers: [
    ThemeService,
  ],
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
