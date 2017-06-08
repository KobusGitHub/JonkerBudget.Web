import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './auth.routing';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmartadminModule } from '../shared/smartadmin.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        SmartadminModule
    ],
    declarations: [
       LoginComponent
    ],
    providers: [
    ]
})
export class AuthModule { }
