import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TablesComponent } from './pages/painters/tables.component';
import { PainterDetailComponent } from './pages/painter-detail/painter-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { ModifyPainterComponent } from './pages/modify-painter/modify-painter.component';

const routes: Routes = [
    { path: 'login',           component: LoginComponent },
    { path: 'modify-painter',  component: ModifyPainterComponent, canActivate: [AuthGuard]},
    { path: 'painters',        component: TablesComponent,        canActivate: [AuthGuard]},
    { path: 'painter-detail',  component: PainterDetailComponent, canActivate: [AuthGuard]},
    { path: 'users',           component: UsersComponent,         canActivate: [AuthGuard]},

    // otherwise redirect to dashboard
    { path: '**', redirectTo: 'painters' }
];

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes,{
        useHash: true
      })
    ],
    exports: [
    ],
  })
  export class AppRoutingModule { }