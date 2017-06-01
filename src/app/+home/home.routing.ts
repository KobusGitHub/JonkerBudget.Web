import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from "./mobile-page/mobile.component";
import {HomeComponent} from "./home-page/home.component";
import {ModuleWithProviders} from "@angular/core";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            pageTitle: 'Home'
        }
    },
    {
        path: 'mobile',
        component: MobileComponent,
        data: {
            pageTitle: 'Mobile'
        }
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);

