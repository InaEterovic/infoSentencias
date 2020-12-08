import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { EstadisticasGeneralesComponent } from './components/estadisticas-generales/estadisticas-generales.component';
import { EstadisticasDelitoComponent } from './components/estadisticas-delito/estadisticas-delito.component';
import { HomeComponent } from './components/home/home.component';
import { ListaSentenciasComponent } from './components/lista-sentencias/lista-sentencias.component';
import { DetalleSentenciaComponent } from './components/detalle-sentencia/detalle-sentencia.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'estadisticas-generales', component:EstadisticasGeneralesComponent },
    {path:'estadisticas-delito', component: EstadisticasDelitoComponent},
    {path:'sentencias/:texto',component:ListaSentenciasComponent},
    {path:'sentencia-detalle/:id',component:DetalleSentenciaComponent},
    {path:'about', component:AboutComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],


exports : [RouterModule]
})
export class AppRoutingModule{}