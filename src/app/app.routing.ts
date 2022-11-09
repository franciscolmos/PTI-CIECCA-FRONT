import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./helpers/auth.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { OPComponent } from "./pages/order-production/order-production.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "order-production",
    component: OPComponent,
    canActivate: [AuthGuard],
  },
  // otherwise redirect to dashboard
  { path: "**", redirectTo: "order-production" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
