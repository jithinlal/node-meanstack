import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../comment.service';
import { List } from '../list';

@Component({
    selector: 'app-my-posts',
    templateUrl: './my-posts.component.html',
    styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

    lists = [];
    constructor(private commentService: CommentService, private router: Router) { }

    ngOnInit() {
        this.commentService.authenticate()
            .then(res => {
                if (!res.success) {
                    this.router.navigate(['/home']);
                } else {
                    this.getMyMessages();
                }
            });
    }

    getMyMessages(): void {
        this.commentService.myMessages()
            .then(res => {
                this.lists = res;
            }, (err) => {
                console.log(err);
            });
    }

    delete(ind, id): void {
        this.lists.splice(ind, 1);
        this.commentService.deleteMyMessage(id)
            .then(() => {
                console.log('deleted');
                this.router.navigate(['/mycomments']);
            }, (err) => {
                console.log(err);
            });
    }
}
