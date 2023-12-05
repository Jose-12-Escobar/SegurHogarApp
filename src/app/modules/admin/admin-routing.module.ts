import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyClientComponent } from 'src/app/modules/admin/modify-client/modify-client.component';
import { NuevoClienteComponent } from 'src/app/modules/admin/nuevo-cliente/nuevo-cliente.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NewSinisterComponent } from './new-sinister/new-sinister.component';

const routes: Routes = [
  { path: 'newClient', component: NuevoClienteComponent },
  { path: 'modifyClient', component: ModifyClientComponent },
  { path: 'listClient', component: ListClientComponent },
  { path: 'newSinister', component: NewSinisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
