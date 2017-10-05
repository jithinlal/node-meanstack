import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

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

    constructor(private messageSearchService: MessageSearchService, private router: Router) { }

    ngOnInit() {
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
