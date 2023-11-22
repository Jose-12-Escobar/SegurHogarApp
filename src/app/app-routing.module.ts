import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';

const app_routes: Routes = [
  { path: 'auth' , loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin' , loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'home', component: HomeComponent },
  { path: 'tarifas', component: TarifaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]
@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
