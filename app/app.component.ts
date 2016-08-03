import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { AddLinkFormComponent } from './add-link-form.component';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/components/tabs';
import { PostComponent } from './post.component';
import { Post } from './post.class';

@Component({
  selector: 'reddit-app',
  template: `
    <nav-bar></nav-bar>
    <div class="container">

      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <div class="panel panel-default">
            <div class="panel-body">
              <add-link-form (formData)="onSubmitForm($event)"></add-link-form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <div class="panel panel-default">
            <div class="panel-body">
              <tabset>
                <tab heading='My Reddit'>
                  <br>
                  <ul class="list-group">
                    <li class="list-group-item" *ngFor="let post_data of posts">
                      <reddit-post class="post" [post]="post_data"></reddit-post>
                    </li>
                  </ul>
                </tab>
                <tab heading='My Playground'>
                  Playground
                </tab>
              </tabset>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  directives: [NavBarComponent, AddLinkFormComponent, TAB_DIRECTIVES, PostComponent]
})
export class AppComponent {

  posts: Post[];

  constructor() {
    this.posts = [
      new Post('Facebook', 'https://www.facebook.com', 3),
      new Post('Google', 'https://www.google.com', 5),
      new Post('LinkedIn', 'https://www.linkedin.com', -3)
    ];
  }

  onSubmitForm(data: Object): void {
    this.posts.push(new Post(data.title, data.link));
  }
}
