import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotPageFoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    authRoutingModule,
    PagesRoutingModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
