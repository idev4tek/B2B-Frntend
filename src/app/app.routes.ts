import { Routes } from '@angular/router';
import { Dashbord } from './components/dashbord/dashbord';
import { Disbursement } from './components/disbursement/disbursement';
import { Corporate } from './components/onboarding/corporate/corporate';
import { Onboard } from './components/onboarding/onboard/onboard';
import { LeadDashboard } from './components/leads/lead-dashboard/lead-dashboard';
import { AddNewLead } from './components/leads/add-new-lead/add-new-lead';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "", component: Dashbord },
    { path: "dashboard", component: Dashbord },
    { path: "disbursement", component: Disbursement },
    { path: "leads", component: LeadDashboard, },
    {
        path: "add-lead", component: AddNewLead
    },
    {
        path: "onboarding", component: Onboard,
        children: [
            { path: "", redirectTo: "corporate", pathMatch: "full" },
            { path: "corporate", component: Corporate }
        ]
    },

];
