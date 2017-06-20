import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/pairwise'
import { NotificationService } from '../../shared/utils/notification.service';
import { AuthApiService } from '../../domain/services/auth-api.service';

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
        private fb: FormBuilder, private authApi: AuthApiService
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

        const obs = this.authApi.login(this.loginData);
        obs.subscribe(res => {
            // console.log('login return:');
            // console.log(res);

            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('tokenType', res.tokenType);
            localStorage.setItem('username', res.username);
            localStorage.setItem('roles', res.roles);

            this.router.navigate(['']);

        }, error => {
            // console.log('login error:');
            // console.log(error);
            this.displayError('Invalid username or password');
        });


        // if (this.frmData.userName === 'info@crazyjonker.co.za' && this.frmData.password === 'crazyPa$$w0rd'){
        //     localStorage.setItem('username', this.frmData.userName);
        //     localStorage.setItem('password', this.frmData.password);
        //     this.router.navigate(['']);
        // } else {
        //     this.notificationService.bigBox({
        //         title: 'Error',
        //         content: "Invalid username or password",
        //         color: '#C46A69',
        //         timeout: 10000,
        //         icon: 'fa fa-warning shake animated',
        //         number: ''
        //     });
        // }

      
    }

    private displayError(error: any) {

        this.notificationService.bigBox({
            title: 'Error',
            content: error,
            color: '#C46A69',
            timeout: 10000,
            icon: 'fa fa-warning shake animated',
            number: ''
        });
    }
}