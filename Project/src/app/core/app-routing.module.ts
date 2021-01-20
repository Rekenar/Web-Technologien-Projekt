import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {HomeComponent} from '../components/home/home.component';
import {OverviewComponent} from '../components/overview/overview.component';
import { StartComponent } from '../components/start/start.component';

const routes: Routes = [

    {  path: '' , redirectTo:'/login',pathMatch:'full' },
    {  path: 'login', component: LoginComponent },
    {  path: 'register', component: RegisterComponent },
    {  path: 'home', component: HomeComponent },
    {  path: 'overview', component: OverviewComponent },
    {  path: 'start', component: StartComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}