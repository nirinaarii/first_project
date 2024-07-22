import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgrammComponent } from './programm/programm.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { EditComponent } from './admin/edit/edit.component';
import { PrestationComponent } from './admin/prestation/prestation.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { ServeurComponent } from './serveur/serveur.component';
import { ClientComponent } from './client/client.component';
export const routes: Routes = [
    {
       path:'' , component:HeaderComponent
    },
    {
        path:'programm',title: 'Programm Page',component:ProgrammComponent,
    },
    {
        path:'disponibility',title:'Disponibility Page',component:DisponibilityComponent
    },
    {
        path:'login',title:'Login Page' ,component:LoginComponent
    },
    // {path: '**', component: EditComponent },
    // {path: '**', component: AdminpageComponent },
    {
        path:'admin',loadChildren:() => import('./admin/admin.module').then((m) => m.AdminModule)
    },
    {
         path: 'prestation', loadChildren:() => import('./admin/admin.module').then((c) => c.AdminModule)
    },

    {
        path:'serveur',component:ServeurComponent
    },
    {
        path:'client',component:ClientComponent
    }
    // {
    //     path:'prestation',loadComponent:() => import('./admin/presation/prestation.component').then((c) => c.PrestationComponent)
    // },
    // {
    //     path:'',component:EditComponent
    // }

];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })
// export class AppRoutes {}