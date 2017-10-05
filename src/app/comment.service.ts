import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { List } from './list';

@Injectable()
export class CommentService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occured : ', error);
        return Promise.reject(error.message || error);
    }

    authenticate(): Promise<any> {
        return this.http.get('/user/auth')
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    userLogin(data): Promise<any> {
        return this.http.post('/user', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    userRegister(data): Promise<any> {
        return this.http.post('/user/signup', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    messageSubmit(data): Promise<any> {
        return this.http.post('/user/post', JSON.stringify({ comment: data }), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getAllMessages(): Promise<List[]> {
        return this.http.get('/user')
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    logoutSession(): Promise<any> {
        return this.http.get('/user/logout')
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    myMessages(): Promise<any> {
        return this.http.get('/user/mine')
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    deleteMyMessage(id): Promise<any> {
        return this.http.delete(`/user/${id}`, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
