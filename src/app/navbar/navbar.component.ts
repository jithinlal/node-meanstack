import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalEventsManagerService } from '../global-events-manager.service';
import { CommentService } from '../comment.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    showNavBar: Boolean = false;

    constructor(
        private globalEventsManagerService: GlobalEventsManagerService,
        private commentService: CommentService,
        private router: Router
    ) {
        this.globalEventsManagerService.showNavBarEmitter.subscribe((mode) => {
            if (mode !== null) {
                this.showNavBar = mode;
            }
        });
    }

    ngOnInit() {
        // this.commentService.authenticate()
        //     .then(res => {
        //         if (!res.success) {
        //             this.router.navigate(['/home']);
        //         }
        //     });
    }

}
