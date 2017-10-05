import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

import { List } from './list';

@Injectable()
export class MessageSearchService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    // search(term: string): Observable<List[]> {
    //     console.log(term);
    //     return this.http.get(`/user/search/?name=${term}`)
    //         .map(res => res.json());
    // }
    private handleError(error: any): Promise<any> {
        console.error('An error occured : ', error);
        return Promise.reject(error.message || error);
    }

    searchMessage(term: string): Promise<any> {
        return this.http.post('/user/search', JSON.stringify({ msg: term }), { headers: this.headers })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(this.handleError);
    }
}
