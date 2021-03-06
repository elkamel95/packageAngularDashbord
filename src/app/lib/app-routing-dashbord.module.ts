import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/Auth/auth-guard.service';
import { WidgetTableComponent } from './pages/widget/widget-table/widget-table.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SiginComponent } from './pages/sigin/sigin.component';


const routes: Routes = [

  { path: '', component: LayoutDashboardComponent    ,children:[{
    path:'dashboard' , component:DashboardComponent , canActivate: [AuthGuard] , pathMatch: 'full' }, 
    {path:'widget', component:WidgetTableComponent ,canActivate: [AuthGuard]  },
  

  ] },
  {path:'signup' , component:SignUpComponent },
    {path:'sigin' , component:SiginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleDashbord {}
