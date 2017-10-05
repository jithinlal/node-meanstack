import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

import { MessageSearchService } from '../message-search.service';
import { List } from '../list';

@Component({
    selector: 'app-message-search',
    templateUrl: './message-search.component.html',
    styleUrls: ['./message-search.component.css']
})
export class MessageSearchComponent implements OnInit {

    list: any;
    msgs = [];
    // private searchTerms = new Subject<string>();

    constructor(private messageSearchService: MessageSearchService, private router: Router) { }

    // search(term: string): void {
    //     this.searchTerms.next(term);
    // }

    ngOnInit() {
        //     this.lists = this.searchTerms
        //         .debounceTime(300)
        //         .distinctUntilChanged()
        //         .switchMap(term => term ? this.messageSearchService.search(term) : Observable.of<List[]>([]))
        //         .catch(err => {
        //             console.log(err);
        //             return Observable.of<List[]>([]);
        //         });
    }

    search(val): void {
        if (val === '') {
            this.msgs = [];
        } else {
            this.messageSearchService.searchMessage(val)
                .then(res => {
                    if (val === '') {
                        this.msgs = null;
                    }
                    console.log(res);
                    this.msgs = res;
                }, (err) => {
                    console.log(err);
                });
        }
    }

}
