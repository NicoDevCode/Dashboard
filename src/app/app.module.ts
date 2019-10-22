import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {SessionsService} from './components/session/services/sessions.service';
import {CanalesService} from './components/canales/services/canales.service';

import { FormsModule } from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCheckboxModule, MatProgressSpinnerModule, MatFormFieldModule, MatSlideToggleModule, MatInputModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/session/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CanalesComponent } from './components/canales/canales.component';
import { TemasComponent } from './components/temas/temas.component';
import { ModalEditPrioridadComponent } from './components/temas/modal-edit-prioridad/modal-edit-prioridad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainNavComponent,
    CanalesComponent,
    TemasComponent,
    ModalEditPrioridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgbPaginationModule,
    MatProgressSpinnerModule,
    SweetAlert2Module,
    BrowserModule,
    SnotifyModule
  ],
  entryComponents: [ModalEditPrioridadComponent],
  providers: [SessionsService, CanalesService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
