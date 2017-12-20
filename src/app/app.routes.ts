import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home", component: HomeComponent
    },
    {path:"dashboard",component:DashboardComponent}

    
]

export const approute: ModuleWithProviders = RouterModule.forRoot(routes);