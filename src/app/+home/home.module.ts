import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import { HomeComponent } from "./home-page/home.component";
import { MobileComponent } from "./mobile-page/mobile.component";

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
      SmartadminModule
  ],
  declarations: [HomeComponent, MobileComponent]
})
export class HomeModule { }
