import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { PrestationComponent } from './prestation/prestation.component';

const routes: Routes = [
  {
    path:'',component:EditComponent
  },
  {
    path:'prestation',component:PrestationComponent
  },



//   {
//     path:'edit',loadChildren:() => import('./admin/admin.module').then((m) => m.AdminModule)
// },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
