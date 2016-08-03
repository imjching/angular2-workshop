import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; // for the map() function
import { Post } from './post.class';

@Injectable()
export class RedditService {

  constructor(private http: Http) {}

  private dataUrl = 'data.json'; // web api

  getPosts(): Observable<Post[]> {
    // call the http service, then map it to the value of the data key,
    return this.http.get(this.dataUrl).map((res: Response) => res.json().data)
  }
}