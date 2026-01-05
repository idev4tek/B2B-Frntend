import { Routes } from '@angular/router';
import { Dashbord } from './components/dashbord/dashbord';
import { Disbursement } from './components/disbursement/disbursement';

export const routes: Routes = [
    {path:"",redirectTo:"",pathMatch:"full"},
    {path:"",component:Dashbord},
    {path:"dashboard",component:Dashbord},
    {path:"disbursement",component:Disbursement}
];
