export class TokenModel {

    accessToken: string;
    tokenType: string;
    expiresIn: number;
    username: string;
    roles: string;
    issued: Date;
    expires: Date;
   
    constructor(
    ) { }
}
