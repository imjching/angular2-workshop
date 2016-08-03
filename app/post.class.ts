export class Post {

  title: string;
  link: string;
  votes: number;

  // here, the ? means that it is optional
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0; // default votes to 0 if it is not entered
  }

  upvote(): void {
    this.votes += 1;
  }

  downvote(): void {
    this.votes -= 1;
  }

}
