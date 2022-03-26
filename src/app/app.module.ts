import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { LideresComponent } from './components/lideres/lideres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LideresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
