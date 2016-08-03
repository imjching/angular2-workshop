import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-link-form',
  template: `
    <h3>Add a new link</h3>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" [(ngModel)]="post.title" name="title" placeholder="Google">
      </div>
      <div class="form-group">
        <label for="link">Link</label>
        <input type="text" class="form-control" [(ngModel)]="post.link" name="link" placeholder="https://www.google.com">
      </div>
      <button type="submit" class="btn btn-primary" (click)="submitForm()">Submit link</button>
    </form>
  `
})
export class AddLinkFormComponent {

  post: Object = {};
  @Output() formData = new EventEmitter<Object>();

  submitForm(): void {
    this.formData.emit(this.post);
    this.post = {};
  }
}