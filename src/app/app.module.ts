import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


import {AppRoutingModule} from './app-routing.module';
import { environment } from './../environments/environment';
import { EstadisticasGeneralesComponent } from './components/estadisticas-generales/estadisticas-generales.component';
import { EstadisticasDelitoComponent } from './components/estadisticas-delito/estadisticas-delito.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaSentenciasComponent } from './components/lista-sentencias/lista-sentencias.component';
import { DetalleSentenciaComponent } from './components/detalle-sentencia/detalle-sentencia.component';
import { AboutComponent } from './components/about/about.component';
import { ModalSentenciaComponent } from './components/modal-sentencia/modal-sentencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EstadisticasGeneralesComponent,
    EstadisticasDelitoComponent,
    ListaSentenciasComponent,
    DetalleSentenciaComponent,
    AboutComponent,
    ModalSentenciaComponent
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
