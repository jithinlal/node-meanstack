import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../comment.service';

@Component({
    selector: 'app-after-navbar',
    templateUrl: './after-navbar.component.html',
    styleUrls: ['./after-navbar.component.css']
})
export class AfterNavbarComponent implements OnInit {

    showNavBar: Boolean = false;
    constructor(private router: Router, private commentService: CommentService) { }

    ngOnInit() {
    }

    sessionLogout(): void {
        this.commentService.logoutSession()
            .then(res => {
                if (res.success === true) {
                    this.showNavBar = false;
                    this.router.navigate(['/home']);
                }
            });
    }

}
