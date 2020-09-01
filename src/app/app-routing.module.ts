import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { EstadisticasGeneralesComponent } from './components/estadisticas-generales/estadisticas-generales.component';
import { EstadisticasDelitoComponent } from './components/estadisticas-delito/estadisticas-delito.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'estadisticas-generales', component:EstadisticasGeneralesComponent },
    {path:'estadisticas-delito', component: EstadisticasDelitoComponent} 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

exports : [RouterModule]
})
export class AppRoutingModule{}