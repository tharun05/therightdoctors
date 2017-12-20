import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { approute } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormMessagesComponent} from './shared/components/form.messages.component';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
  MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
  MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatTooltipModule, MatSnackBarModule
} from '@angular/material';
import { MenuComponent } from './apex/menu/menu.component';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FormMessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
    MatTooltipModule, MatSnackBarModule, BrowserAnimationsModule, approute,FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
