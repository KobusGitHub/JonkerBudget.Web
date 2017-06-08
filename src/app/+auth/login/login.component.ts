import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/pairwise'
import { NotificationService } from '../../shared/utils/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    frmLogin: FormGroup;
    frmData: any;
    loginData: any;

    constructor(private router: Router, private notificationService: NotificationService,
       private fb: FormBuilder
    ) {}

    ngOnInit() {
        localStorage.clear();

        let userName = '';
        //this.authStoreService.token.subscribe(token => userName = token.lastKnownUserName);

        this.frmLogin = this.fb.group({
            'userName': [userName, Validators.required],
            'password': ['', Validators.compose([Validators.minLength(8), Validators.required])]
        });
    }

    login(formData) {
        this.frmData = formData;
        this.loginData = 'username=' + this.frmData.userName + '&password=' + this.frmData.password + '&grant_type=password';
        //this.authStoreService.login(this.loginData);

        if (this.frmData.userName === 'info@crazyjonker.co.za' && this.frmData.password === 'crazyPa$$w0rd'){
            localStorage.setItem('username', this.frmData.userName);
            localStorage.setItem('password', this.frmData.password);
            this.router.navigate(['']);
        } else {
            this.notificationService.bigBox({
                title: 'Error',
                content: "Invalid username or password",
                color: '#C46A69',
                timeout: 10000,
                icon: 'fa fa-warning shake animated',
                number: ''
            });
        }

      
    }
}