import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './material-design/typography/typography.component';
import { ButtonComponent } from './material-design/button/button.component';
import { BadgeComponent } from './material-design/badge/badge.component';
import { SpinnetProgressComponent } from './material-design/spinnet-progress/spinnet-progress.component';
import { NavBarComponent } from './material-design/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './material-design/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    BadgeComponent,
    SpinnetProgressComponent,
    NavBarComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
