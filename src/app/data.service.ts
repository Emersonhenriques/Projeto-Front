import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUser(userId: string) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentDetails(commentId: string) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/comments/' + commentId );
  }
}
