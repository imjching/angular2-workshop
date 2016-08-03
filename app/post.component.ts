import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Post } from './post.class';

@Component({
  selector: 'reddit-post',

  template: `
    <div class="col-xs-2 points">
      {{ post.votes }} points
    </div>
    <div class="col-xs-5">
      <h4>{{ post.title }}</h4>
      <a href="{{ post.link }}">{{ post.link }}</a>
    </div>
    <div class="col-xs-5 up-down-buttons">
      <div class="btn-group">
        <button class="btn btn-xs btn-success" (click)="upvote()">
          <span class="glyphicon glyphicon-menu-up"></span>&nbsp;Upvote
        </button>
        <button class="btn btn-xs btn-danger" (click)="downvote()">
          <span class="glyphicon glyphicon-menu-down"></span>&nbsp;Downvote
        </button>
      </div>
    </div>
  `
})
export class PostComponent {
  @Input() post: Post;
  @Output() updateVotes = new EventEmitter<number>();

  upvote(): void {
    this.updateVotes.emit(1);
  }

  downvote(): void {
    this.updateVotes.emit(-1);
  }
}