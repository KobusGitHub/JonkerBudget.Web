import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TokenModel } from '../models/token.model';

@Injectable()
export class AuthApiService {

    constructor(
        private http: Http
    ) {

    }

    login(authData: any): Observable<TokenModel> {

        return this.http.post(`${environment.webApiBaseAddress}token`, authData)
            .map((res: Response) => {

                const token = new TokenModel();

                // console.log('login token:');
                // console.log(res);

                token.accessToken = res.json().access_token;
                token.tokenType = res.json().token_type;
                token.expiresIn = res.json()['expires_in'];
                token.username = res.json().username;
                token.roles = res.json().roles;
                token.issued = res.json()['.issued'];
                token.expires = res.json()['.expires'];
              

                return token;
            })
            .catch((error: any) => Observable.throw(error) || 'Server error');
    }

    logout() {

        return this.http.post(`${environment.webApiBaseAddress}api/Account/Logout`, null)
            .map((res: Response) => {

                return res;
            })
            .catch((error: any) => Observable.throw(error) || 'Server error');
    }
}
